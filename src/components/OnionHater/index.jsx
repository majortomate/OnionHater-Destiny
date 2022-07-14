import { useState } from 'react';

function OnionHater(){

  const [text, setText] = useState('');

  const handlerText = (e)=>{

    function isOnion(){
      if(e.target.value.toLowerCase().includes("cebolla")){
        alert("ODIO LA CEBOLLA")
        e.target.value = '';
      }
    }
    setText(isOnion)
    
  }
  return(
    <div>
      <textarea name="text" id="text" onChange={handlerText}></textarea>
    </div>
  )
}

export default OnionHater
