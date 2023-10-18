import { useState } from "react";


function ResultBody(props:any){

    var [[icon,color,toggleDesc],setToggle] = useState(['►','black','hidden']);
   
    const toggleResult = () =>{
        
        icon === '►' ? setToggle(['▼','green','show']):setToggle(['►','black','hidden']);
    }


    return (  <div>
        <button className="proverb-title" style={{color}} onClick={()=>toggleResult()}><span >{icon}</span><b>{props.name}</b></button>
            <ul>
                <li className={toggleDesc}>{props.desc}</li>
            </ul></div>)

}

export default ResultBody