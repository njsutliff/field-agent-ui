import React, { useState, useEffect } from "react";
import {AddAgentsForm} from "./AddAgentsForm";
import{EditAgentsForm} from "./EditAgentsForm";
import {AgentsTable} from "./AgentsTable";
import {Errors} from "./Errors.js";

function Agents() {
  const [agents, setAgents] = useState([]);
  const [description, setDescription] = useState("");
  const [editToDoId, setEditToDoId] = useState(0);    
  const [errors, setErrors] = useState([]);

  /*"agentId": 1,
"firstName": "Claudian",
"middleName": "C",
"lastName": "O'Lynn",
"dob": "1956-11-09",
"heightInInches": 41,
*/

useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/agent");
      const data = await response.json();
      setAgents(data);
    } catch (error) {
      console.log(error);
    }
  };
  getData();
}, []);

const handleAddSubmit = async (description) => {
  const newAgent = {
    description,
  };

  const body = JSON.stringify(newAgent);

  try {
    const response = await fetch("http://localhost:8080/api/agent/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (response.status === 201 || response.status === 400) {
      const data = await response.json();

      if (data.id) {
        setAgents([...agents, data]);

        setDescription("");
        setErrors([]);
      } else {
        setErrors(data);
      }
    } else {
      throw new Error("Server Error: Something unexpected went wrong.");
    }
  } catch (error) {
    console.log(error);
  }
};
/*
const handleEdit = (todoId) => {
  const agentToEdit = agents.find((todo) => todo.id === todoId);

  setDescription(agentToEdit.description);
  setEditToDoId(agentToEdit.id);
};

const handleUpdateSubmit = async (description) => {
  const updatedToDo = {
    id: editToDoId,
    description,
  };

  const body = JSON.stringify(updatedToDo);

  try {
    const response = await fetch(
      `http://localhost:8080/api/agents/${editToDoId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

    if (response.status === 204) {
      const newTodos = [...agents];

      const todoIndexToEdit = agents.findIndex(
        (todo) => todo.id === editToDoId
      );

      newTodos[todoIndexToEdit] = {
        id: editToDoId,
        description,
      };

      setAgents(newTodos);

      setDescription("");
      setEditToDoId(0);
      setErrors([]);
    } else if (response.status === 400) {
      const data = await response.json();
      setErrors(data);
    } else {
      throw new Error("Server Error: Something unexpected went wrong.");
    }
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async (todoId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/agents/${todoId}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 204) {
      const newTodos = agents.filter((todo) => todo.id !== todoId);
      setAgents(newTodos);
    } else {
      throw new Error("Server Error: Something unexpected went wrong.");
    }
  } catch (error) {
    console.log(error);
  }
};

const handleUpdateCancel = () => {
  setDescription("");
  setEditToDoId(0);
  setErrors([]);
};
*/

 return ( 
    <>
      <AddAgentsForm
        handleAddSubmit={handleAddSubmit}
        />
   <AgentsTable
      agents={agents}
      />
  </>
);
/*
return (
  <>
    <Errors errors={errors} />

    {editToDoId === 0 ? (
      <AddAgentsForm
        handleAddSubmit={handleAddSubmit}
        errors={errors}
        description={description}
        handleUpdateCancel={handleUpdateCancel}
      />
    ) : (
      <EditAgentsForm
        handleUpdateSubmit={handleUpdateSubmit}
        description={description}
        handleUpdateCancel={handleUpdateCancel}
      />
    )}
    <AgentsTable
      agents={agents}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  </>
);*/
}

export default Agents;