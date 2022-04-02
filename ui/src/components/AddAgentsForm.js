import React, { useState } from "react";

const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    height: null
};
export const AddAgentsForm = (props) => {
    const [state, setState] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        height: null
    })

    /*"agentId": 1,
 "firstName": "Claudian",
 "middleName": "C",
 "lastName": "O'Lynn",
 "dob": "1956-11-09",
 "heightInInches": 41,
 */
    const handleInputChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.value]:value
            });

        /*setFirstName(event.target.value);
        setMiddleName(event.target.value);
        setLastName(event.target.value);
        setDob(event.target.value);
        setHeight(event.target.value);*/
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddSubmit(state);
    };

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
        <button type="submit" className="btn btn-success ml-2">
                Add agent
            </button>

        </form>
    );
};