import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import productos from '../components/Item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from '../components/Carrito/CartWidget';


function RoutesApp() {

  

  return (

    <BrowserRouter>

      <NavBar/>

        <Routes>

          <Route               

                path="/"

                element={

                <ItemListContainer />
        
                 }
          
          />

          <Route

                 path='/detalle'

                 element={

                    <ItemDetailContainer/>

                 }

          />

          <Route

                 path='/carrito'

                 element={

                    <CartWidget/>

                 }

          />

        </Routes> 
      
    </BrowserRouter>
  )

}

export default RoutesApp