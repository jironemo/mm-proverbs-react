import './App.css'

import data from './data.json' 
import TitleButton from './components/TitleButton'
import Result from './components/Result'
import { useState } from 'react';
function App() {
  
    const [proverbs,setProverbs] = useState([{ TitleId: 0, ProverbId: 0, ProverbName: '', ProverbDesp: '' }]);


    const  getDataFunc = (key:number) => {
        var filtered = data.Tbl_MMProverbs.filter(item => item['TitleId']===key)
        console.log(filtered);
        setProverbs((filtered));
    }



  var buttons = 
  <>
    <div className = "container">
    { 
    data.Tbl_MMProverbsTitle.map((value)=>
        {
        return <TitleButton getDataFunc={getDataFunc} id={value.TitleId} name={value.TitleName}/>
        }
        )
    }
       
  </div>
  <div className='result'>
    <Result proverbs={proverbs}/>
  </div>
  </>
  return buttons;
}

export default App
