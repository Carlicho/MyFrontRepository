import './App.css'
import PathRoutes from './helpers/PathRoutes.Helpers.Js'
import { Route, Routes } from 'react-router-dom'
import About from './components/Views/About/About'
import Header from './components/Header/Header'
import Products from './components/products/products'
import Help from './components/Help/Help'
import Index from './components/Views/Index/Index'
import Footer from './components/Footer/Footer'

import ProductDetail from './components/products/ProductDetailCard/ProductDetail'
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  // const {loginWithRedirect} =  useAuth0()
  
  // <button onClick={()=>loginWithRedirect}>login</button>

  return (
    <div className='app'>



    <Header/>
    
      
    
    <Routes>
      <Route path={PathRoutes.LANDING} element={<Index/>}/>
      <Route path={PathRoutes.INDEX} element={<Index/>}/>
      <Route path={PathRoutes.PRODUCTOS} element={<Products/>}/>
      <Route path={PathRoutes.DETAIL} element={<ProductDetail/>}/>
      <Route path={PathRoutes.AYUDA} element={<Help/>}/>
      <Route path={PathRoutes.ABOUT} element={<About/>}/>
 
    </Routes> 
    <Footer />
    </div>
  )
}

export default App
