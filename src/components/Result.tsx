function Result(props:any){

    var k = props.proverbs.map(
        (value:any) =>{
            return (
                <div>
                <li><b>{value.ProverbName}</b></li>
                <ul>
                    <li>{value.ProverbDesp}</li>
                </ul>
            </div>
            )
        }
    )

    return k;
}

export default Result;