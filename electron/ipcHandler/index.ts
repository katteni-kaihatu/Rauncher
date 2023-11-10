import {app, ipcMain, dialog} from "electron";
import {win} from "../main.ts";
import {exec} from "child_process";
import psTree from "ps-tree";
import * as child_process from "child_process";

const WM_CLOSE = 0x0010;

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

  let process: child_process.ChildProcess | null = null

  ipcMain.handle("launchResonite", (event, args) => {
    console.log("launchResonite")
    process =  exec("\"C:\\Program Files (x86)\\Steam\\steamapps\\common\\Resonite\\Resonite.exe\" " + args.args, {cwd: "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Resonite\\"}, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(stdout)
    })

  })

  ipcMain.handle("closeResonite", (event, args) => {
    if(!process?.pid) return
    psTree(process?.pid, (err, children) => {
      console.log(children)
      children.forEach((child) => {
        console.log(child.PID, child.COMMAND, child.PPID, child.STAT)
        // if(typeof child.PID !== "number") return
          global.process.kill(Number(child.PID), "SIGTERM")
        // const hwnd = findWindowByPid(Number(child.PID))
        // if (hwnd) {
        //   user32.SendMessageA(hwnd, WM_CLOSE, 0, 0);
        // } else {
        //   global.process.kill(Number(child.PID), "SIGINT")
        // }
      })
    })
  })
}

export {registerIpcHandler}