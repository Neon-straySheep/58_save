import React from 'react';
import { Link } from 'react-router';

export function Header() {
  return (
    <div className="flex">
      <Link
        style={{color: "white"}}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
         to={"/"}>Home</Link>
        <Link 
    style={{color: "white"}}
    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        to={"/mypost"}>Mypost</Link>
        <Link 
    style={{color: "white"}}
    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        to={"/posts/new"}>New</Link>
    </div>
  );
}
