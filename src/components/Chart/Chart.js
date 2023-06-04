import React from "react";
import './Chart.css';
import ChartBar from './Chartbar.css'


const Chart=props=>{
    return <div className='chart'> 
    {props.dataPoints.map(dataPoint=>
    <ChartBar 
    key={dataPoint.label}
    value={dataPoint.value}/>)} 
    maxValue={null} 
    label={dataPoint.value}
    </div>
};







export default Chart;