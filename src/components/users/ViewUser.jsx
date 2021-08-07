import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

const ViewUser = () => {
    const history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        website: ""
    });

    useEffect(async() => {
        const result = await axios.get(`http://localhost:3333/users/${id}`);
        setUser(result.data);
    });
    return (
        <div className="container w-4/5 mx-auto my-6">
            <h1 className="text-4xl my-6 text-gray-600 text-center font-extrabold"><span className="border-b-4 border-blue-700">Users Details</span></h1>

            <h1 className="text-5xl my-6 text-gray-600 font-extrabold">User ID: <span className="text-blue-700">{ user.id }</span></h1>

            <ul className=" table text-2xl">
                <li className="table-row">
                    <span className="table-cell py-3 pr-28 font-bold">Name :</span>
                    <span className="table-cell py-3 pr-28">{ user.name }</span>
                </li>
                <li className="table-row">
                    <span className="table-cell py-3 pr-28 font-bold">Username :</span>
                    <span className="table-cell py-3 pr-28">{ user.username }</span>
                </li>
                <li className="table-row">
                    <span className="table-cell py-3 pr-28 font-bold">Email Address :</span>
                    <span className="table-cell py-3 pr-28">{ user.email }</span>
                </li>
                <li className="table-row">
                    <span className="table-cell py-3 pr-28 font-bold">Phone Number :</span>
                    <span className="table-cell py-3 pr-28">{ user.phone }</span>
                </li>
                <li className="table-row">
                    <span className="table-cell py-3 pr-28 font-bold">Address :</span>
                    <span className="table-cell py-3 pr-28">{ user.address }</span>
                </li>
                <li className="table-row">
                    <span className="table-cell py-3 pr-28 font-bold">Website :</span>
                    <span className="table-cell py-3 pr-28">{ user.website }</span>
                </li>
            </ul>
            <Link to="/" className="bg-blue-700 py-2 px-3 mt-6 rounded-md text-white font-semibold hover:bg-indigo-800 hover:text-white transition duration-500">Back to Home</Link>
        </div>
    )
}

export default ViewUser
