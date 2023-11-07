import {app, ipcMain, dialog} from "electron";
import {win} from "../main.ts";
import {exec} from "child_process";

const registerIpcHandler = () => {
  ipcMain.handle("test", (event, args) => {
    console.log("from renderer", args)
    return "OK from main"
  })

  ipcMain.handle("appQuit", (event, args) => {
    win?.window.close()
    // app.quit()
  })

  ipcMain.handle("openDialog", (event, args) => {
    if (!win) {
      return
    }
    dialog.showOpenDialog(win.window, {
      properties: ['openDirectory']
    }).then(result => {
      console.log(result.canceled)
      console.log(result.filePaths)
    }).catch(err => {
      console.log(err)
    })
  })

  ipcMain.handle("openDebug", (event, args) => {
    win?.window.webContents.openDevTools({mode: "detach"})
  })

  ipcMain.handle("appVersion", (event, args) => {
    return app.getVersion()
  })

  ipcMain.handle("launchResonite", (event, args) => {
    console.log("launchResonite")
    exec("\"C:\\Program Files (x86)\\Steam\\steamapps\\common\\Resonite\\Resonite.exe\" -Screen -DoNotAutoLoadHome -ResetDash -SkipIntroTutorial -DataPath \"C:\\Data_Path\"", {cwd: "C:\\Data_Path"}, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(stdout)
    })
  })
}

export {registerIpcHandler}