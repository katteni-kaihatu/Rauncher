import './style/App.css'
import "./style/splash.css"
import {useState} from "react";
import splashImg from "./assets/logo-512-nobg.png"

function Splash() {
  const [status, setStatus] = useState("Loading...")

  window.api.on("status", (status: string) => {
    setStatus(status)
  })

  return (
    <>
      <div className="splash">
        <img className="splashImg" src={splashImg}/>
        <div className="splashMessage">{status}</div>
      </div>
    </>
  )
}

export default Splash
