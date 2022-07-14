import { useState } from 'react'

function Destiny(){

  const [city, setCity] = useState("")

  const selectHandler = (e)=>{
    
    setCity(e.target.value)
    
  }
  return(
    <div>
      <select name="cities" onChange={selectHandler}>
        <option value="" selected>Seleccione Ciudad</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sidney">Sidney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>

      {
        city ? <p>Tu destino es {city}</p> : null
      }
      
    </div>
  )
}

export default Destiny
