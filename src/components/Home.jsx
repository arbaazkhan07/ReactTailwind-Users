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
        setusers(result.data.reverse())
    };

    const DeleteUser = async (id) => {
        await axios.delete(`http://localhost:3333/users/${id}`);
        loadUser();
    };

    return (
        <div className="container w-4/5 mx-auto">
            <h1 className="text-4xl my-6 text-gray-600 text-center font-extrabold"><span className="border-b-4 border-gray-700">Users List</span></h1>
            {
                users ?
                <table className="table w-full border-2 border-gray-400 p-4 text-center rounded-md shadow-xl">
                    <thead>
                        <tr className="table-row bg-gray-300 border-b-2 border-gray-400">
                            <th className="table-cell p-4 uppercase text-gray-700">S.No</th>
                            <th className="table-cell p-4 uppercase text-gray-700">Name</th>
                            <th className="table-cell p-4 uppercase text-gray-700">Email</th>
                            <th className="table-cell p-4 uppercase text-gray-700">Address</th>
                            <th className="table-cell p-4 uppercase text-gray-700">Phone</th>
                            <th className="table-cell p-4 uppercase text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr className="table-row border-b-2 border-gray-300 text-gray-600">
                                    <th className="table-cell p-4">{index + 1}</th>
                                    <td className="table-cell p-4">{user.name}</td>
                                    <td className="table-cell p-4">{user.email}</td>
                                    <td className="table-cell p-4">{user.address}</td>
                                    <td className="table-cell p-4">{user.phone}</td>
                                    <td className="table-cell p-4">
                                        <Link to={`/users/${user.id}`} className="transition-colors duration-500 bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-3 mx-2 text-white hover:text-white">View</Link>
                                        <Link to={`/users/edit/${user.id}`} className="transition-colors duration-500 bg-yellow-500 hover:bg-yellow-600 rounded-md py-2 px-3 mx-2 text-white hover:text-white">Edit</Link>
                                        <button onClick={(e) => {DeleteUser(user.id)}} className="transition-colors duration-500 bg-red-500 hover:bg-red-600 rounded-md py-1 px-2 mx-2 text-white hover:text-white">Delete</button>
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
