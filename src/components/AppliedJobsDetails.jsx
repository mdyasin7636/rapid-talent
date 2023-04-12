import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AppliedJobsDetails = ({ d }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    jobType,
    location,
    jobTime,
    salary,
  } = d;

  return (
    <div className="mt-20 border rounded-lg mx-40 px-5 py-5">
      <div className="flex main justify-between items-center">
        <div className="flex">
          <div className="w-40">
          <img className="rounded border h-20 mt-2 p-4 " src={companyLogo} alt="" />
          </div>
          <div className="ml-2">
            <h1 className="font-bold text-xl">{jobTitle}</h1>
            <p className="font-semibold text-sm text-gray-500">{companyName}</p>
            <div className="mt-2 mb-2">
              <button className="border px-2 rounded border-blue-700 text-blue-700">
                {jobType}
              </button>
              <button className="border px-2 rounded ml-2 border-blue-700  text-blue-700">
                {jobTime}
              </button>
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
          </div>
        </div>
        <div className="flex-grow"></div>
        <div>
          <button className="mt-2 px-3 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsDetails;
