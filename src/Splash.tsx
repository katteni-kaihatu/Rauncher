import './style/App.css'
import "./style/splash.css"
import {useState} from "react";
import splashImg from "./assets/splash.png"

function Splash() {
  const [status, setStatus] = useState("Loading...")

  window.api.on("status", (status: string) => {
    setStatus(status)
  })

  return (
    <>
      <div className="splash">
        <img className="splashImg" src={splashImg}/>
        <div className="slpashMessage">{status}</div>
      </div>
    </>
  )
}

export default Splash
