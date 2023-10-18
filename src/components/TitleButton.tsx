function TitleButton(props:any) {
        
        const getDataAndSetStyle = () =>{
            props.getDataFunc(props.id);

        }

        return(
            <button onClick={()=>getDataAndSetStyle()}> {props.name}</button>
        )
}

export default TitleButton