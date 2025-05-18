import React from 'react';
import { Link } from 'react-router';

export function Header() {
  return (
    <div className="flex">
        <Link
        style={{color: "black"}/** Home */}
        className="px-6 py-3 m-2 bg-blue-200 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        to={"/"}>Recommend</Link>
        <Link 
        style={{color: "black"}}
        className="px-6 py-3 m-2 bg-blue-200 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        to={"/recent"}>Recent</Link>
        <Link 
        style={{color: "black"}}
        className="px-6 py-3 m-2 bg-blue-200 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        to={"/mypost"}>Mypost</Link>
        <Link 
        style={{color: "black"}}
        className="px-6 py-3 m-2 bg-blue-200 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        to={"/posts/new"}>New</Link>
    </div>
  );
}
