import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get('http://localhost:3333/users');
        setusers(result.data)
    };
    return (
        <div className="container w-4/5 mx-auto">
            <h1 className="text-4xl my-6 text-gray-600 text-center">Users List</h1>
            {
                users ?
                <table className="w-full table border-2 border-gray-400 p-4 text-center">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 p-4 uppercase">S.No</th>
                            <th className="border border-gray-400 p-4 uppercase">Name</th>
                            <th className="border border-gray-400 p-4 uppercase">Email</th>
                            <th className="border border-gray-400 p-4 uppercase">Address</th>
                            <th className="border border-gray-400 p-4 uppercase">Phone</th>
                            <th className="border border-gray-400 p-4 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th className="border border-gray-400 p-4">{index + 1}</th>
                                    <td className="border border-gray-400 p-4">{user.name}</td>
                                    <td className="border border-gray-400 p-4">{user.email}</td>
                                    <td className="border border-gray-400 p-4">{user.address}</td>
                                    <td className="border border-gray-400 p-4">{user.phone}</td>
                                    <td className="border border-gray-400 p-4">
                                        <Link to="" className="transition-colors duration-500 bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-3 mx-2 text-white">View</Link>
                                        <Link to="" className="transition-colors duration-500 bg-yellow-500 hover:bg-yellow-600 rounded-md py-2 px-3 mx-2 text-white">Edit</Link>
                                        <Link to="" className="transition-colors duration-500 bg-red-500 hover:bg-red-600 rounded-md py-2 px-3 mx-2 text-white">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                :
                <p className="text-red-500 text-center text-lg">...Please wait...</p>
            }
        </div>
    )
}

export default Home
