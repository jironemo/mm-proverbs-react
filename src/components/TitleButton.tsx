

function TitleButton(props:any) {

        return(
                <>
                    <button onClick={()=>props.getDataFunc(props.id)}> {props.name}</button>
                </>
        )
}

export default TitleButton