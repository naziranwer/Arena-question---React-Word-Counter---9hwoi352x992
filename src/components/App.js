import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [font,setFont]=useState(16);
  const [input,setInput]=useState("");
  const [wordl,setWordl]=useState(0);
  const [charl,setCharl]=useState(0);
  const [limit,setLimit]=useState(50);
  
  const handleInput=(e)=>{
    const InputString=e.target.value;

    setInput(InputString);

    if(InputString.length > limit){
      e.target.value=InputString.slice(0,limit);
    }
    setCharl(InputString.length);

    const words = InputString.split(/\s+/).filter((word) => word !== '');
    const wordCount = words.length;
    setWordl(wordCount);
  }

  console.log("characters",charl);

  return (
    <div id='main'>
      <label htmlFor='range' >Font Size Picker</label>
      <input id='range' type='range' value={font} min={16} max={32} onChange={(e)=> setFont(e.target.value)}/>
      <label htmlFor='char-limit-input'>Word Limit</label>
      <input id='char-limit-input' value={limit} onChange={(e)=>setLimit(e.target.value)}/>
      <textarea style={{fontSize:`${font}px`}} onChange={(e)=> handleInput(e)}>
      </textarea>
      <div id='word-counter'>{wordl} </div>
      <div id='char-counter'>{charl}</div>
    </div>
  )
}


export default App;
