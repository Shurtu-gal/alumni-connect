import {React,useState} from 'react'
import './Sidebar.css'

import {SideBarData} from "../../../config/DashBoard"

const Sidebar = () => {

  const [selected,setSelected]=useState(0);  

  return (
    <div className='Sidebar'>
        <div className="logo">
            {/* Logo */}
            {/* <img src={Logo} alt="" height="70px" width="70px"/> */}
            <span>
                Al<span>u</span>mni
            </span>
        </div>

        {/* Menu */}
        <div className="menu">
            
             {SideBarData.map((item,index)=>{
                return(
                    <div 
                    className={selected==index?"menuItem active":"menuItem"}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                    <item.icon />
                    <span>
                      {item.heading}    
                    </span>  
                    </div>
                )
             })}
           <div className="menuItem">
            <i className="fa-solid fa-right-from-bracket"></i>
           </div>
        </div>
        

    </div>
  )
}

export default Sidebar