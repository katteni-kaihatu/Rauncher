import {autoUpdater} from "electron-updater";
import {launchMain, splash} from "./main.ts";

export const registerUpdateEvent = () => {
  autoUpdater.on('checking-for-update', () => {
    console.log('Checking for update...');
    // mainWindow.log("Checking for update...")
    splash?.window.webContents.send("status", "アップデートを確認中")
  })
  autoUpdater.on('update-available', (info) => {
    splash?.window.webContents.send("status", "アップデートあり")
    console.log('Update available.');
    // mainWindow.log("Update available", info)
  })
  autoUpdater.on('update-not-available', (info) => {
    console.log('Update not available.');
    launchMain()
    // mainWindow.log("Update not available", info)
  })
  autoUpdater.on('error', (err) => {
    splash?.window.webContents.send("status", "エラー")
    splash?.window.webContents.send("log", [err])
    // mainWindow.log('Error in auto-updater. ' + err);
  })
  autoUpdater.on('download-progress', (progressObj) => {
    // let log_message = "Download speed: " + progressObj.bytesPerSecond;
    // log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    // log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    // mainWindow.log(log_message);

    splash?.window.webContents.send("status", `ダウンロード中 ${Math.floor(progressObj.percent * 10) / 10}%`)
  })
  autoUpdater.on('update-downloaded', (info) => {
    // mainWindow.log('Update downloaded');
    setImmediate(() => {
      autoUpdater.quitAndInstall(true, true);
    })
  });
}