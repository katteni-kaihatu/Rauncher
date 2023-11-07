import { app, BrowserWindow } from 'electron'
import path from 'node:path'
import {autoUpdater} from "electron-updater"
import {SplashWindow} from "./window/splash.ts";
import {MainWindow} from "./window/mainWindow.ts";
import {registerUpdateEvent} from "./updater.ts";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: MainWindow | null
let splash: SplashWindow | null

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

const launchMain = () => {
  splash?.window.close()
  win = new MainWindow()
}
app.whenReady().then(async () => {

  splash = new SplashWindow()

  setTimeout(async () => {
    splash?.window.webContents.send("status", "起動中")

    registerUpdateEvent()
    if(!(await autoUpdater.checkForUpdates())) {
      setTimeout(() => {
        splash?.window.close()
        win = new MainWindow()
      }, 5000)
    }
  }, 1000)
})

export { win, splash, launchMain}