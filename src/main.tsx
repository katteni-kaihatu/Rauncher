import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Splash from "./Splash.tsx";

const splash = new URLSearchParams(window.location.search.slice(1)).has("splash")
if(splash) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Splash/>
    </React.StrictMode>,
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  )
}
// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

// Logger from Main Process
window.api.on("log", (args: any) => {
  console.log("[MAIN LOG]", ...args)
})