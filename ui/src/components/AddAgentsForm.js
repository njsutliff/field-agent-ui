import React, { useState } from "react";
export const AddAgentsForm = (props) => {
    const initialFormState =  {firstName: "", middleName: "",lastName: "",dob: "",height: 0, agencies: []};
        const [values, setValues] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addAgent(values);
        setValues(initialFormState);
    }
    return (
        <form onSubmit={handleSubmit}> <div className="form-inline mx-2 my-4">
            <input
                type="text"
                className="form-control col-6"
                id="firstName"
                placeholder="First Name:"
                value={values.firstName}
                onChange={handleInputChange}
                name="firstName"
                label="firstName"
            />
            <input
                className="form-control col-6"
                id="middleName"
                placeholder="Middle Name:"
                value={values.middleName}
                onChange={handleInputChange}
                name="middleName"
                label="middleName"
            />
            <input
                className="form-control col-6"
                id="middleName"
                placeholder="Last Name:"
                value={values.lastName}
                onChange={handleInputChange}
                name="lastName"
                label="lastName"
            />
            <input
                className="form-control col-6"
                id="dob"
                placeholder="Date of Birth::"
                value={values.dob}
                onChange={handleInputChange}
                name="dob"
                label="date of birth"
            />
            <input
            type= "number"
                className="form-control col-6"
                id="height"
                placeholder="Height in Inches:"
                value={values.height}
                onChange={handleInputChange}
                name="height"
                label="height in inches"
            />
            </div>
            <button type="submit" className="btn btn-success ml-2">
                Add agent
            </button>   
        </form>

    )
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
