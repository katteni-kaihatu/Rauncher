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
      icon: path.join(process.env.VITE_PUBLIC, 'logo-512.png'),
      autoHideMenuBar: true,
      maxWidth: 920,
      maxHeight: 600,
      width: 920,
      minWidth: 500,
      height: 600,
      minHeight: 400,
      webPreferences: {
        preload: path.join(__dirname, '../dist-electron/preload.js'),
        nodeIntegration: false,
        contextIsolation: true,
      },
    })


    this.window.webContents.on('did-finish-load', () => {
      this.window?.webContents.send('log', "loaded")
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
