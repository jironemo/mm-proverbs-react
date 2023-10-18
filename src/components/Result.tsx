import ResultBody from "./ResultBody";

function Result(props:any){

    
    if(props.proverbs[0]!==undefined &&props.proverbs[0].ProverbId >= 0){
        return (
            <ol>  
                {
                props.proverbs.map((value:any) =>{
                    return (
                        <ResultBody name={value.ProverbName} desc = {value.ProverbDesp}/>
                        )
                    }
                )}
            </ol>
        );
    }
    else return <p>စကားပုံများမရှိသေးပါ။</p>
}

export default Result;