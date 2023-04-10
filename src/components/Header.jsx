import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-indigo-50 p-10">
      <p className="text-2xl font-bold">Rapid Talent</p>
      <div className="flex justify-center flex-1 space-x-4 font-medium">
        <Link to="/" className="text-zinc-500 hover:text-gray-900">
          Home
        </Link>
        <Link to="/statistics" className="text-zinc-500 hover:text-gray-900">
          Statistics
        </Link>
        <Link to="/appliedJobs" className="text-zinc-500 hover:text-gray-900">
          Applied Jobs
        </Link>
        <Link to="/blog" className="text-zinc-500 hover:text-gray-900">
          Blog
        </Link>
      </div>
      <button className="px-4 py-2 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
        Start Applying
      </button>
    </div>
  );
};

export default Header;
