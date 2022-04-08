import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Agents from './components/Agents';
import Home from './components/Home';
import NotFound from './components/NotFound';
function App() {
  /*

  /
 /agents
 /agents/add
 /agents/edit/:id
 /agents/delete/:id
 /login
 / else 'Not Found'
  */ return (
<>  
    <Router>
      <Routes>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path = "/agents">
        <Agents/>
      </Route>
      <Route path="*">
          <NotFound />
      </Route>
      </Routes>
    </Router>
 </>  
/*
    <h2 className ="my-4">Field Agent UI </h2>
    <Agents/>
*/
  )
  }
  export default App;

 