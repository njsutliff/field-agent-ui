import React, { useState, useEffect } from "react";
import {AddAgentsForm} from "./AddAgentsForm";
//import{EditAgentsForm} from "./EditAgentsForm";
import {AgentsTable} from "./AgentsTable";
import {Errors} from "./Errors.js";

function Agents() {
  const [agents, setAgents] = useState([]);

  const [editAgentId, setEditAgentId] = useState(0);
  const [errors, setErrors] = useState([]);

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

const handleAddSubmit = async (firstName,middleName,lastName,dob,heightInInches,agencies, aliases) => {
  const newAgent = {
    firstName,
    middleName,
    lastName,
    dob,
    heightInInches: parseFloat(heightInInches),
    agencies,
    aliases
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
const handleEdit = (agentId) => {
  const agentToEdit = agents.find((agent) => agent.id === agentId);
  setEditAgentId  (agentToEdit.id);
  setFirstName(agentToEdit.firstName);
  setMiddleName(agentToEdit.middleName);
  setLastName(agentToEdit.lastName);
  setDob(agentToEdit.dob);
  setHeight(agentToEdit.height);
};

const handleUpdateSubmit = async (firstName,
  middleName,
  lastName,
  dob,
  height) => {
  const updatedAgent = {
    id: editAgentId,
    firstName,
    middleName,
    lastName,
    dob,
    height
  };

  const body = JSON.stringify(updatedAgent);

  try {
    const response = await fetch(
      `http://localhost:8080/api/agents/${editAgentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

    if (response.status === 204) {
      const newAgents = [...agents];

      const agentIndexToEdit = agents.findIndex(
        (agent) => agent.id === editAgentId
      );

      newAgents[agentIndexToEdit] = {
        id: editAgentId,
        firstName,
    middleName,
    lastName,
    dob,
    height
      };

      setAgents(newAgents);
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setDob("");
      setHeight("");
     
      setEditAgentId(0);
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
*/
const handleDelete = async (agentId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/agent/` + agentId,
      {
        method: "DELETE",
      }
    );

    if (response.status === 204) {
      const newAgents = agents.filter((agent) => agent.id !== agentId);
      setAgents(newAgents);
      window.location.reload();
    } else {
      throw new Error("Server Error: Something unexpected went wrong.");
    }
  } catch (error) {
    console.log(error);
  }
};

const handleUpdateCancel = () => {
window.location.reload();
  setEditAgentId(0);
setErrors([]);
};
 return ( 
  <>
    <Errors errors={errors} />
    
      <AddAgentsForm
        handleAddSubmit={handleAddSubmit}
        errors={errors}
        handleUpdateCancel={handleUpdateCancel}
      />
  
    <AgentsTable
      agents={agents}
      handleDelete={handleDelete}

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