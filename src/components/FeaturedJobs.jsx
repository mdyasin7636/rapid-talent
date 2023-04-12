import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

const FeaturedJobs = ({ job }) => {
  const {
    companyLogo, jobTitle, companyName, jobType, location, jobTime, salary, id} = job;
    const navigate = useNavigate()
  return (
    <div className="rounded-lg p-4 border bg-indigo-50 w-5/6 mx-10">
      <img className="w-28 mb-2" src={companyLogo} alt="" />
      <h2 className="text-xl font-semibold">{jobTitle}</h2>
      <p className="text-lg font-medium">{companyName}</p>
      <div className="mt-2 mb-2">
      <button className="border px-2 rounded border-blue-700 text-blue-700">{jobType}</button> 
      <button className="border px-2 rounded ml-2 border-blue-700  text-blue-700">{jobTime}</button>
      </div>
      <div class="flex">
        <div class="flex items-center mr-4">
          <MapPinIcon className="h-6 w-6 text-blue-400" />
          <p class="ml-1">{location}</p>
        </div>
        <div class="flex items-center">
          <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
          <p class="ml-1">Salary: {salary}</p>
        </div>
      </div>
      <button onClick={()=> navigate(`/jobDetails/${id}`)} className="mt-2 px-3 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600" >View Details</button>
      
    </div>
  );
};

export default FeaturedJobs;
