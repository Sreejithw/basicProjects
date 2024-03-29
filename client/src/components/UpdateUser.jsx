import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
        .then(result => setUserData({...userData, name: result.data.name, email: result.data.email, age: result.data.age}))
        .then(err => console.log(err));
    }, [])

    const handleOnFormChange = (event) => {
        // console.log(event.target);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const updateForm = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`, userData)
        .then(result => {
            navigate('/');
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={updateForm}>
                    <h2>Update User</h2>
                    <div className="mb2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" name="name" className="form-control" defaultValue={userData.name} onChange={handleOnFormChange}/>
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control" defaultValue={userData.email} onChange={handleOnFormChange} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder="Enter Age" name="age" className="form-control" defaultValue={userData.age} onChange={handleOnFormChange}/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser