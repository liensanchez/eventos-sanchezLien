import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom"


const InputCount = () =>{

  return (
    <>
        <Link to='/carrito'>

          <button
          
              className='btn-outline-primary'

              onClick={()=>console.log('ir a cart')}

          >

            Ir al carrito

          </button>

        </Link>
        
    
        <Link to='/detalle'>

          <button
          
              className='btn-outline-primary'
              
              onClick={()=>console.log('seguir comprando')}
              
          >

            Seguir Comprando
            
          </button>

        </Link>
    </>


  )



}


const ButtonCount = ({handleInter})=>{

  return <button 

          className='btn-outline-sucess'

          onClick={handleInter}

          >
            
            Agregar al carrito

          </button>

}

const Cambiabilidad = () => {

  const [inputType, setInputType] = useState ('button')

  const handleInter = () =>{

    setInputType('input')

  }

  return (

    <div>

      {
        inputType === 'button' ?

          <ButtonCount handleInter={handleInter} />

          :

          <InputCount/>
      }

    </div>

  )

}


export default Cambiabilidad