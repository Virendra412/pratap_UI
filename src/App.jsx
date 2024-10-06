import './App.css'
import ComponentRenderer from './componentSection/ComponentRenderer';
import Layout from './componets/Layout';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route, useLoaderData, useLocation } from 'react-router-dom';








function App() {
  



  return (
   
   
        <>
      
      <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
           
          <Route path='/components' element={ <ComponentRenderer/>} />
          {/* <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='/wishlist' element={<ProtectedRoute><Wishlist/></ProtectedRoute>} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/product/:productId' element={<ShowProduct />} />
          <Route path='/:gender/:cat/:subcat' element={<ResultsPage />} /> */}
          
        </Route>
      </Routes>
    </Router>
      </>
      
 
    
  
   
  )
}

export default App
