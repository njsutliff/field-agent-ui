import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import NotFound from './components/NotFound';
function App() {
   return (
<>  
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="*" element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
 </>  
/*
    <h2 className ="my-4">Field Agent UI </h2>
    <Agents/>
*/
  )
  }
  export default App;

 