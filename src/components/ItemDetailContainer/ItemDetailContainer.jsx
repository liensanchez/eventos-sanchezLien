import React, { useState } from 'react';
import detalle from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import Cambiabilidad from '../ItemCount/ItemCount';



function ItemDetailContainer() {

 


  const inputHandler = (event)=>{

    //evt.preventDefault()
    console.log (event.nativeEvent)
   
  }


  
  
  return (
    
   <>

    { detalle.map ((data) => <div key={data.id} >
                                      
                                      <h2>{`${data.bateria}`} </h2>

                                      <button className='btn-primary bg-secondary rounded'>

                                        {`${data.precio}`}

                                      </button>

                                      
                                
                              </div> )}

  <input type="text" 
    className='m-5'
    onKeyPress={inputHandler}
    name='nombre'
    id='i'/>

  <button >enviar</button>

    <Cambiabilidad/>

  </>

  )

}

export default ItemDetailContainer