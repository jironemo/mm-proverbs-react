function Result(props:any){

    var k = props.proverbs.map(
        (value:any) =>{
            return <li>{value.ProverbName}</li>
        }
    )

    return k;
}

export default Result;