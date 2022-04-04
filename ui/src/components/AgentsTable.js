import React from "react";
export const AgentsTable = (props) => (
    <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Middle Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
        <th>Height (inches)</th>

      </tr>
    </thead>
    <tbody>
      {props.agents.length > 0 ? (
        props.agents.map((agent) => (
          <tr key={agent.id}>
            <td>{agent.agentId}</td>
            <td>{agent.firstName}</td>
            <td>{agent.middleName}</td>
            <td>{agent.lastName}</td>
            <td>{agent.dob}</td>
            <td>{agent.heightInInches}</td>

            <td>
              <div>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => props.handleEdit(agent.id)}
                >
                  Edit
                </button>
                <button
                  onClick={() => props.handleDelete(agent.agentId)}
                  className="btn btn-danger btn-sm ml-2"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Agents</td>
        </tr>
      )}
    </tbody>
  </table>
);