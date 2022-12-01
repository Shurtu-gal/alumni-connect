import React from 'react'
import './Updates.css'

import { UpdatesData } from  '../../../config/DashBoard'

const Updates = () => {
  return (
    <div className="Updates" >
       {UpdatesData.map((update)=>{
           return(
                <div className="update">
                    <img src={update.img} alt="" />
                   <div className="noti">
                    <div style={{marginBottom:'0.5rem'}}>
                        <span>
                            {update.name} &nbsp; 
                        </span>
                        <span>
                            {update.noti}
                        </span>
                        <div>
                            {update.time}
                        </div>
                    </div>
                   </div>
                </div>
           )
       })}
    </div>
  )
}

export default Updates