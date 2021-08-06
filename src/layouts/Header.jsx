import React from 'react'

const Header = () => {
    return (
        <nav className="bg-gray-700 text-gray-300 p-4 shadow-lg">
            <div className="container w-4/5 mx-auto">
                <div className="flex">
                    <a href="" className="pr-8 text-2xl font-extrabold">Users</a>
                    <ul className="flex flex-row justify-center items-center">
                        <li className="pr-4"><a href="">Home</a></li>
                        <li className="pr-4"><a href="">About</a></li>
                        <li className="pr-4"><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
