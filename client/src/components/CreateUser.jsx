import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        age: 0,
    })

    const handleOnFormChange = (event) => {
        // console.log(event.target);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/createUser', userData)
        .then(result => {
            navigate('/');
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submitForm}>
                    <h2>Add User</h2>
                    <div className="mb2">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" placeholder="Enter Name" className="form-control" onChange={handleOnFormChange}/>
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" placeholder="Enter Email" className="form-control" onChange={handleOnFormChange} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Age</label>
                        <input type="number" name="age" placeholder="Enter Age" className="form-control" onChange={handleOnFormChange} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser