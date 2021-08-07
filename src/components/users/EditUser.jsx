import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const AddUser = () => {
    const { id } = useParams();
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        website: ""
    });

    useEffect(() => {
        loadUser()
    }, []);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3333/users/${id}`);
        console.log(result.data);
        setUser(result.data)
    };

    const UpdateUser = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3333/users/${id}`, user);
        history.push("/");
    };
    return (
        <div className="container w-4/5 mx-auto my-6">
            <h1 className="text-4xl my-6 text-gray-600 text-center font-extrabold"><span className="border-b-4 border-yellow-500">Edit User</span></h1> 
            <form onSubmit={UpdateUser} className="grid place-items-center w-full mx-auto">

                <input type="text" onChange={handleChange} defaultValue={user.name} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-yellow-500  bg-gray-100 placeholder-indigo-400 tracking-wider mt-6 mb-4 py-2 px-3" name="name" placeholder="Enter Your Name" required/>

                <input type="text" onChange={handleChange} defaultValue={user.username} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-yellow-500  bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="username" placeholder="Enter Your Username" required/>

                <input type="email" onChange={handleChange} defaultValue={user.email} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-yellow-500  bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="email" placeholder="Enter Your Email Address" required/>

                <input type="tel" onChange={handleChange} defaultValue={user.phone} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-yellow-500  bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="phone" placeholder="Enter Your Phone Number" required/>

                <input type="text" onChange={handleChange} defaultValue={user.address} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-yellow-500  bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="address" placeholder="Enter Your Address" required/>

                <input type="text" onChange={handleChange} defaultValue={user.website} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-yellow-500  bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="website" placeholder="Enter Your Website" required/>

                <input type="submit" className="w-3/5 transition-colors duration-500 cursor-pointer tracking-wider font-extrabold bg-yellow-500 hover:bg-yellow-600 py-2 px-3 rounded-md text-white hover:text-white" value="Update User" />
            </form>
        </div>
    )
}

export default AddUser
