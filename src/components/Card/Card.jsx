import React from 'react'
import './Card.css'
import {AnimateSharedLayout} from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import Chart from 'react-apexcharts';
import {UilTimes} from '@iconscout/react-unicons';

const Card = (props) => {

    const [expanded,setExpanded]=React.useState(false);
 
  return (
   <div className="Card">
    <AnimateSharedLayout>
        {
            expanded ? <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:
            <CompactCard param={props} setExpanded={()=>setExpanded(true)} />
            
        }
    </AnimateSharedLayout>
   </div>
  )
}

//Compact Card
function CompactCard({param,setExpanded}){
   const Png=param.png; 
   return(
         <div className="CompactCard"
            style=
            {{
                background: param.color.background,
                boxShadow: param.color.boxShadow,
            }}
           onClick={setExpanded}
         >
            <div className="RadialBar">
               <CircularProgressbar
                 value={param.barValue}
                 text={`${param.barValue}%`}
              />
            <span>{param.title}</span>
            </div>
            <div className="detail">
              <Png/>
              <span>${param.value}</span>
              <span>Last 24 Hours</span>
            </div>


        </div> 
       

   )
}

// Expanded Card
function ExpandedCard({param,setExpanded}){
    

    return(
        <div className="ExpandedCard"
            style=
            {{
                background: param.color.background,
                boxShadow: param.color.boxShadow,
            }}
           
        >
            <div>
                <UilTimes onClick={setExpanded}/>
            </div>
            <span>{param.title}</span>
            
            <div className="chartContainer">
            
            <iframe loading="lazy" src="https://www.canva.com/design/DAFTgu7gG_Q/view?embed" >
</iframe>

                {/* <Chart series={param.series} options={data.options} type="area" /> */}
            </div>
            <span>Last 24 Hours</span>
        </div>
    )
}

export default Card