import ResultBody from "./ResultBody";

function Result(props:any){

    
    if(props.proverbs[0]!==undefined &&props.proverbs[0].ProverbId >= 0){
        return (
            <ol className="list">  
                {
                props.proverbs.map((value:any) =>{
                    return (
                        <ResultBody name={value.ProverbName} desc = {value.ProverbDesp} id = {value.ProverbId}/>
                        )
                    }
                )}
            </ol>
        );
    }
    else return <p className="center-text center-div">စကားပုံများမရှိသေးပါ။</p>
}

export default Result;