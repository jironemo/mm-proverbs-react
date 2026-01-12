import './App.css'

import data from './data.json'
import { useState } from 'react';
import ProverbModal from './ProverbView';

function App() {
    const [selectedProverb, setSelectedProverb] = useState<any | null>(null);
    const [proverbs, setProverbs] = useState<any[]>([]);

    const getDataAndSetStyle = (id: number) => {
        import('./data.json').then((payload) => {
            const filtered = payload.Tbl_MMProverbs.filter((item: any) => item['TitleId'] === id);
            setProverbs(filtered);
        });
    };

    const displayProverb = (proverb: any) => {
        setSelectedProverb(proverb);
    };

    return (
        <>
            <div className="center-text">
                <h1>မြန်မာ့ရိုးရာ စကားပုံများ</h1>
            </div>
            <div className="container">
                {data.Tbl_MMProverbsTitle.map((value) => {
                    return (
                        <button key={value.TitleId.toString()} onClick={() => getDataAndSetStyle(value.TitleId)}>
                            {value.TitleName}
                        </button>
                    );
                })}
            </div>
            <div className="proverb-container">
                {proverbs.length > 0
                    ? proverbs.map((item: any, id) => (
                            <div key={id} className="card" onClick={() => displayProverb(item)}>
                                <h3>{item.ProverbName}</h3>
                            </div>
                        ))
                    : <p>Click on a title to see proverbs</p>}
            </div>
            {selectedProverb && (
                <ProverbModal
                    proverb={selectedProverb}
                    onClose={() => {
                        setSelectedProverb(null);
                    }}
                />
            )}
        </>
    );
}

export default App
