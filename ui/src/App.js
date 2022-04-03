import React, {useState} from 'react';
import Agents from './components/Agents';
import { AgentsTable } from './components/AgentsTable';
import { AddAgentsForm } from './components/AddAgentsForm';
function App() {
  /* const initialFormState = { id: null, description: "" }; 

  const [todos, setTodos] = useState(todoData);
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(initialFormState);

  const addTodo = (todo) => {
    todo.id = todos.length + 1;
    setTodos([...todos, todo]);
  };
*/
const agentData = [
  {firstName: "", middleName: "",lastName: "",dob: "",height: 50}
]
  const initialFormState = { id: null,firstName: "",middleName: "",lastName: "",dob: "",heightInInches: null}; 
  const [agents, setAgents] = useState(agentData);
  const addAgent = (agent) => {
   agent.id = agents.length + 1;
   setAgents([...agents, agent]);
  }
  return (
    <div className="container">
         <h2>Field Agent UI</h2>
         <div className="row">
        <div className="col">
        {editing ? (
            <>
            <h2>Edit Todo</h2>
            <EditTodoForm 
              updateTodo={updateTodo} 
              currentTodo={currentTodo} 
              setEditing={setEditing} />
            </>
          ) : (
        <>
          <h2>Add Agent</h2>
          <AddAgentsForm addAgent={addAgent} />
          </>
          )}</div>
          <div className="col">
          <h2>View Todos</h2>
          <TodoTable todos={todos} editRow={editRow} deleteTodo={deleteTodo} />
        </div>
    </div>
    </div>
  )
  }
export default App;
