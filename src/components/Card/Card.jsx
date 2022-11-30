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
            expanded ? 
            '<ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>':
            <CompactCard param={props} />
            
        }
    </AnimateSharedLayout>
   </div>
  )
}

//Compact Card
function CompactCard({param}){
   const Png=param.png; 
   return(
         <div className="CompactCard"
            style=
            {{
                background: param.color.background,
                boxShadow: param.color.boxShadow,
            }}
           
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

//Expanded Card
// function ExpandedCard({param,setExpanded}){
//     const data = {
//         options: {
//           chart: {
//             type: "area",
//             height: "auto",
//           },
    
//           dropShadow: {
//             enabled: false,
//             enabledOnSeries: undefined,
//             top: 0,
//             left: 0,
//             blur: 3,
//             color: "#000",
//             opacity: 0.35,
//           },
    
//           fill: {
//             colors: ["#fff"],
//             type: "gradient",
//           },
//           dataLabels: {
//             enabled: false,
//           },
//           stroke: {
//             curve: "smooth",
//             colors: ["white"],
//           },
//           tooltip: {
//             x: {
//               format: "dd/MM/yy HH:mm",
//             },
//           },
//           grid: {
//             show: true,
//           },
//           xaxis: {
//             type: "datetime",
//             categories: [
//               "2018-09-19T00:00:00.000Z",
//               "2018-09-19T01:30:00.000Z",
//               "2018-09-19T02:30:00.000Z",
//               "2018-09-19T03:30:00.000Z",
//               "2018-09-19T04:30:00.000Z",
//               "2018-09-19T05:30:00.000Z",
//               "2018-09-19T06:30:00.000Z",
//             ],
//           },
//         },
//       };

//     return(
//         <div className="ExpandedCard"
//             style=
//             {{
//                 background: param.color.background,
//                 boxShadow: param.color.boxShadow,
//             }}
           
//         >
//             <div>
//                 <UilTimes onClick={setExpanded}/>
//             </div>
//             <span>{param.title}</span>
            
//             <div className="chartContainer">
//                 <Chart series={param.series} options={data.options} type="area" />
//             </div>
//             <span>Last 24 Hours</span>
//         </div>
//     )
// }

export default Card