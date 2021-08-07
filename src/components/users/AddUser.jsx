import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        website: ""
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const AddUser = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3333/users', user);
        history.push("/");

    };
    return (
        <div className="container w-4/5 mx-auto my-6">
            <h1 className="text-gray-800 text-4xl text-center font-extrabold"><span className="border-b-4 border-green-500">Add User</span></h1> 
            <form onSubmit={AddUser}className="grid place-items-center w-full mx-auto">

                <input type="text" onChange={handleChange} defaultValue={user.name} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-green-500 bg-gray-100 placeholder-indigo-400 tracking-wider mt-6 mb-4 py-2 px-3" name="name" placeholder="Enter Your Name" required/>

                <input type="text" onChange={handleChange} defaultValue={user.username} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-green-500 bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="username" placeholder="Enter Your Username" required/>

                <input type="email" onChange={handleChange} defaultValue={user.email} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-green-500 bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="email" placeholder="Enter Your Email Address" required/>

                <input type="tel" onChange={handleChange} defaultValue={user.phone} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-green-500 bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="phone" placeholder="Enter Your Phone Number" required/>

                <input type="text" onChange={handleChange} defaultValue={user.address} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-green-500 bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="address" placeholder="Enter Your Address" required/>

                <input type="text" onChange={handleChange} defaultValue={user.website} className="w-3/5 outline-none rounded-md focus:ring-4 focus:ring-green-500 bg-gray-100 placeholder-indigo-400 tracking-wider mb-4 py-2 px-3" name="website" placeholder="Enter Your Website" required/>

                <input type="submit" className="w-3/5 transition-colors duration-500 cursor-pointer tracking-wider font-extrabold bg-green-500 hover:bg-green-600 py-2 px-3 rounded-md text-white hover:text-white" value="Add User" />
            </form>
        </div>
    )
}

export default AddUser
