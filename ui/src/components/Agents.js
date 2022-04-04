import React, { useState, useEffect } from "react";
import {AddAgentsForm} from "./AddAgentsForm";
import{EditAgentsForm} from "./EditAgentsForm";
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

const handleAddSubmit = async (agent) => {
 
  const body = JSON.stringify(agent);
  
    const response = await fetch("http://localhost:8080/api/agent/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

  }
/*
    if (response.status === 201 || response.status === 400) {
      const data = await response.json();

      if (data.id) {
        
        setAgents([...agents, data]);
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
};*/

const handleEdit = (agentId) => {
  const agentToEdit = agents.find((agent) => agent.id === agentId);
  setEditAgentId  (agentToEdit.id);
};

const handleUpdateSubmit = async (firstName,middleName,lastName,dob,heightInInches,agencies,aliases) => {
  const updatedAgent = {
    id: editAgentId,
    firstName,
    middleName,
    lastName,
    dob,
    heightInInches: parseFloat(heightInInches),
    agencies,
    aliases
  };

  const body = JSON.stringify(updatedAgent);

  try {
    const response = await fetch(
      `http://localhost:8080/api/agent/` + editAgentId,
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
    heightInInches,
    agencies,
    aliases
      };
setAgents([...newAgents]);
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
   
    <h5>Active Agents</h5>
    <AgentsTable
      agents={agents}
      handleDelete={handleDelete}
      handleEdit = {handleEdit}
    /> <h5>Add an Agent</h5>
     {editAgentId === 0 ? (
    <AddAgentsForm
        handleAddSubmit={handleAddSubmit}
        errors={errors}
        handleUpdateCancel={handleUpdateCancel}
      />
      ) : (
    
    <EditAgentsForm
          handleUpdateSubmit={handleUpdateSubmit}
          agentToEdit = {agents}
          handleUpdateCancel={handleUpdateCancel}
          />
          )}
     </>
);
}

export default Agents;