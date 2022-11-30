import React from 'react'
import './Updates.css'

import { UpdatesData } from '../../../config/DashBoard';

const Updates = () => {
  return (
    <div className="Updates">
       {UpdatesData.map((update)=>{
           return(
                <div className="update">
                   <div className="noti">
                    <div style={{marginBottom:'0.5rem'}}>
                        <span>
                            {update.name} 
                        </span>
                        <span>
                            {update.noti}
                        </span>
                        <span>
                            {update.time}
                        </span>
                    </div>
                   </div>
                </div>
           )
       })}
    </div>
  )
}

export default Updates