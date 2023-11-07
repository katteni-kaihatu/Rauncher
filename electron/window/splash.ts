import { app, BrowserWindow} from 'electron'
import {join} from "path";
import path from "node:path";

process.env.DIST_ELECTRON = join(__dirname, '..')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST_ELECTRON, '../public')

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

const preload = join(__dirname, '../dist-electron/preload.js')
const url = process.env.VITE_DEV_SERVER_URL


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
    if (VITE_DEV_SERVER_URL) {
      this.window.loadURL(`${url}?splash=true`)
    } else {
      this.window.loadFile(path.join(process.env.DIST, 'index.html'), { query: {'splash': 'true'} })
    }
  }
}
