import { useState } from "react";


function TitleButton(props:any) {
        
        var [style,setStyle] = useState("white");
        const getDataAndSetStyle = () =>{
            props.getDataFunc(props.id);
        }

        return(
                <>
                    <button style={{backgroundColor:style}} onClick={()=>getDataAndSetStyle()} onMouseDown={()=>setStyle("grey")} onMouseLeave={()=>setStyle("white")}> {props.name}</button>
                </>
        )
}

export default TitleButton