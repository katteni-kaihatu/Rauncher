import { app, BrowserWindow} from 'electron'
import {join} from "path";

process.env.DIST_ELECTRON = join(__dirname, '..')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST_ELECTRON, '../public')


const preload = join(__dirname, '../dist-electron/preload.js')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')


export class SplashWindow {
  window: BrowserWindow
  constructor() {
    this.window = new BrowserWindow({
      frame: false,
      width: 300,
      height: 400,
      resizable: false,
      alwaysOnTop: true,
      webPreferences: {
        preload,
        nodeIntegration: false,
        contextIsolation: true,
      },
    })
    if (process.env.VITE_DEV_SERVER_URL) {
      this.window.loadURL(`${url}?splash=true`)
    } else {
      this.window.loadFile(indexHtml, { query: {'splash': 'true'} })
    }
  }
}
