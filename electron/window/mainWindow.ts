import {app, BrowserWindow} from 'electron'
import {join} from "path";
import path from "node:path";

process.env.DIST_ELECTRON = join(__dirname, '..')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST_ELECTRON, '../public')
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

export class MainWindow {
  window: BrowserWindow

  constructor() {

    this.window = new BrowserWindow({
      icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
      webPreferences: {
        preload: path.join(__dirname, '../dist-electron/preload.js'),
        nodeIntegration: false,
        contextIsolation: true,
      },
    })

    // Test active push message to Renderer-process.
    this.window.webContents.on('did-finish-load', () => {
      this.window?.webContents.send('main-process-message', (new Date).toLocaleString())
    })

    if (VITE_DEV_SERVER_URL) {
      this.window.loadURL(VITE_DEV_SERVER_URL)
    } else {
      // win.loadFile('dist/index.html')
      this.window.loadFile(path.join(process.env.DIST, 'index.html'))
    }
  }

  log(...str: any[]) {
    this.window.webContents.send("log", str)
  }
}
