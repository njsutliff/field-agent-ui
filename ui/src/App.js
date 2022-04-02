import React, {useState} from 'react';
import Agents from './components/Agents';
import { AgentsTable } from './components/AgentsTable';
import { AddAgentsForm } from './components/AddAgentsForm';
function App() {
  /*agentId": 1,
  "firstName": "Claudian",
  "middleName": "C",
  "lastName": "O'Lynn",
  "dob": "1956-11-09",
  "heightInInches": 41,*/
  const initialFormState = { id: null,firstName: "",middleName: "",lastName: "",dob: "",heightInInches: null}; 
  const [agents, setAgents] = useState(initialFormState);
  const addAgent = (agent) => {
   agent.id = agents.length + 1;
   setAgents([...agents, agent]);
  }
  return (
    <div className="container">
         <h2>Field Agent UI</h2>
         <Agents />

         <div className="row">
        <div className="col">
        <>
          <h2>Add Agent</h2>
          <AddAgentsForm addAgent={addAgent} />
          </>
        </div>
    </div>
    </div>
  )
  }
export default App;
