import React, {useState} from 'react';
import Agents from './components/Agents';
import { AgentsTable } from './components/AgentsTable';
import { AddAgentsForm } from './components/AddAgentsForm';
import {EditTodoForm} from './components/EditAgentsForm';
function App() {
const agentData = [
  {firstName: "", middleName: "",lastName: "",dob: "",height: 50, agencies: []}
]
const initialFormState = 
  {firstName: "", middleName: "",lastName: "",dob: "",height: 50, agencies: []}


  const [agents, setAgents] = useState(agentData);
  const [editing, setEditing] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(initialFormState);


  const addAgent = (agent) => {
   agent.id = agents.length + 1;
   setAgents([...agents, agent]);
  }
  const updateAgent = (updatedAgent) => {
    setEditing(false);
    setAgents(agents.map((agent) => agent.id === updateAgent.id ? updatedAgent : agent));
  }
  const editRow = (agent) => {
    setEditing(true);
    setCurrentAgent({...agent});
  }
  return (
    <div className="container">
         <h2>Field Agent UI</h2>
         <Agents />
         <div className="row">
        <div className="col">
        {editing ? (
            <>
            <h2>Edit Todo</h2>
            <EditTodoForm 
              updateAgent={updateAgent} 
              currentAgent={currentAgent} 
              setEditing={setEditing} />
            </>
          ) : (
        <>
          <h2>Add Agent</h2>
          <AddAgentsForm addAgent={addAgent} />
          </>
          )}
          <h2>View Todos</h2>
          <AgentsTable agents={agents} />
        
    </div>
    </div>
    </div>
  )
  }
export default App;
