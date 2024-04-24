import React from 'react'
import "./safe.css"
import {useLocation} from "react-router-dom"

const SafeArea = ({children}) => {
    const location=useLocation()
  return (
    <div className={!location.pathname.includes("auth") ? 'safe-area' : "" }>
        {children}
    </div>
  )
}

export default SafeArea