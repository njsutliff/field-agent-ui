import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Agents from './components/Agents';
import Home from './components/Home';
import { AddAgentsForm } from './components/AddAgentsForm';
import { EditAgentsForm } from './components/EditAgentsForm';
function App() {
  return (
  
/*<>  
<h2 className ="my-4">Field Agent UI </h2>

    <Router>
    <Route path="/agents">
      <Agents />
    </Route>
    <Route  exact path="/">
         <Home />
                    </Route>
    </Router>
 </>*/


<>
    <h2 className ="my-4">Field Agent UI </h2>
    <Agents/>
</>
  )
  }
  export default App;

 