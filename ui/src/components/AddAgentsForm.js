import React, { useState } from "react";
const DEFAULT_AGENT =  {firstName: "", middleName: "",lastName: "",dob: "",height: 0, agencies: []};
export const AddAgentsForm = (props) => {

    const [agent, setAgent] = useState(DEFAULT_AGENT);
    //  
    //  const [firstName, setFirstName]     =useState(props.firstName);
    //  const [middleName, setMiddleName]   =useState(props.middleName );
    //  const [lastName, setLastName]       =useState(props.lastName );
    //  const [dob, setDob]                 =useState(props.dob );
    //  const [height, setHeight]           =useState(props.height );
    //  const[agencies, setAgencies]        =useState(props.agencies);

    const handleInputChange = event => {
        const {name, value} = event.target;
              console.log(event);
        setAgent({...agent, [name]: value});
       /* setFirstName(event.target.value);
        setMiddleName(event.target.value);
        setLastName(event.target.value);
        setDob(event.target.value);
        setHeight(event.target.value);
        setAgencies(event.target.value);*/
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddSubmit(agent.firstName, agent.middleName, agent.lastName, agent.dob, agent.height, agent.agencies);
    };
    return (
        <form onSubmit={handleSubmit} className="form-inline mx-2 my-4">
            <input
                type="text"
                className="form-control col-6"
                id="firstName"
                placeholder="First Name:"
                value={agent.firstName}
                name="firstName"
                label="firstName"
                onChange={handleInputChange}
            />
            <input
                className="form-control col-6"
                id="middleName"
                placeholder="Middle Name:"
                value={agent.middleName}
                name="middleName"
                label="middleName"
                onChange={handleInputChange}
            />
            <input
                className="form-control col-6"
                id="middleName"
                placeholder="Last Name:"
                value={agent.lastName}
                name="lastName"
                label="lastName"
                onChange={handleInputChange}               
            />
            <input
                className="form-control col-6"
                id="dob"
                placeholder="Date of Birth::"
                value={agent.dob} 
                name="dob"
                label="date of birth"
                onChange={handleInputChange}             
            />
            <input
            type= "number"
                className="form-control col-6"
                id="height"
                placeholder="Height in Inches:"
                value={agent.height}
                 name="height"
                label="height in inches"
                onChange={handleInputChange}   
            />
            <button type="submit" className="btn btn-success ml-2">
                Add agent
            </button>   
        </form>
    );
};
        /*setFirstName(event.target.value);
setMiddleName(event.target.value);
setLastName(event.target.value);
setDob(event.target.value);
setHeight(event.target.value);*/

/*
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddSubmit(state);
    };*/
/*
    return (
        <form onSubmit={handleSubmit} className="form-inline mx-2 my-4">
            <input
                type="text"
                className="form-control col-6"
                id="firstName"
                name="firstName"
                placeholder="First Name:"
                value={state.firstName}
                onChange={handleInputChange}
            />
          <input
                type={"text"}
                className="form-control col-6"
                id="middleName"
                name="middleName"
                placeholder="Middle Name:"
                value={state.middleName}
                onChange={handleInputChange}
        /> 
            <input
                type={"text"}
                className="form-control col-6"
                id="lastName"
                name="lastName"
                placeholder="Last Name:"
                value={state.lastName}
                onChange={handleInputChange}
            />
             <input
                type={"text"}
                className="form-control col-6"
                id="dob"
                name="dob"
                placeholder="date of birth:"
                value={state.dob}
                onChange={handleInputChange}
            />
        <input
                type={"number"}
                className="form-control col-6"
                id="height"
                name="height"
                placeholder="height in inches:"
                value={state.height}
                onChange={handleInputChange}
        />
        

        </form>
    );*/
