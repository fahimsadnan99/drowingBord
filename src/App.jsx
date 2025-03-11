import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const App = () => {
  return (
    <div className='container'  style={{background : "black", display : "flex",align: "center", alignItems:"center", overflow : "hidden"}}>
 <div className='container'  style={{background : "black", display : "flex",align: "center", alignItems:"center",padding: "5px", overflow : "hidden"}}>
 <h2>Telegram  </h2> <FaTelegram style={{color : "#24A1DE", fontSize : "30px", marginLeft : "20px"}}/> <h2  >@TraderSadnan1</h2> <span></span>

  <h2>Youtube  </h2> <FaYoutube  style={{color : "#FF0000", fontSize : "30px", marginLeft : "20px"}}/> <h2  >@TraderSadnan</h2><span></span>
  <h2>Message ME </h2> <FaTelegram style={{color : "#24A1DE", fontSize : "30px", marginLeft : "20px"}}/> <h2  >@TraderSadnan</h2> 

    </div>
   
    </div>
  )
}

export default App