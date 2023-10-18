import './App.css'

import data from './data.json' 
import TitleButton from './components/TitleButton'
import Result from './components/Result'
import { useState } from 'react';
function App() {
  
    const [proverbs,setProverbs] = useState([{ TitleId: -1, ProverbId: -1, ProverbName: '', ProverbDesp: '' }]);


    const  getDataFunc = (key:number) => {
        var filtered = data.Tbl_MMProverbs.filter(item => item['TitleId']===key)
        console.log(filtered);
        setProverbs((filtered));
    }



  var app = 
  <>
    <div className="center-text"> 
        <h1>မြန်မာ့ရိုးရာ စကားပုံများ</h1>
        <p>Made with 💖 by Jiro</p>
    </div>
    <div className = "container">{ 
            data.Tbl_MMProverbsTitle.map((value)=>{
                return <TitleButton getDataFunc={getDataFunc} id={value.TitleId} name={value.TitleName}/>
            }
        )
    }  
    </div>
    <div className='result'>
        <Result proverbs={proverbs}/>
    </div>
  </>
  return app;
}

export default App
