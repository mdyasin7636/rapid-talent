import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../utils/fakeDb';

const JobDetails = () => {

    const job = useParams()

    const [jobDetail, setJobDetail] = useState({})
    useEffect(()=> {
        fetch('/featuredJobs.json')
        .then(res=> res.json())
        .then(data => {
            const foundJob = data.find(j => j.id == job.id);
            setJobDetail(foundJob);
        });
    
    }, []);

    console.log(jobDetail);

    const handleApply = () => {
        addToDb(jobDetail.id)
    }


    return (
        <div className="flex mx-12 px-12 mt-12 mb-12">
          <div className="w-3/4 p-4">
            <div className="font-bold mb-2">Job Description:</div>
            <div>{jobDetail.jobDescription}</div>
            <div className="font-bold mt-4 mb-2">Job Responsibility:</div>
            <div>{jobDetail.jobResponsibility}</div>
            <div className="font-bold mt-4 mb-2">Educational Requirements:</div>
            <div>{jobDetail.education}</div>
            <div className="font-bold mt-4 mb-2">Experiences:</div>
            <div>{jobDetail.experience}</div>
          </div>
          <div className="w-1/4 p-4 border rounded-lg pt-12 bg-indigo-50">
            <div className="font-bold mb-2">Job Details</div>
            <div><span className="font-bold mb-2">Salary:</span> {jobDetail.salary} (Per Month)</div>
            <div><span className="font-bold mb-2">Job Title:</span> {jobDetail.jobTitle} </div>
            <div className="font-bold mb-2">Contact Information</div>
            <div>
              <div className="mb-2">Phone: {jobDetail.phone}</div>
              <div className="mb-2">Email: {jobDetail.email}</div>
              <div className="mb-2">Address: {jobDetail.address}</div>
            </div>
            <button onClick={()=> handleApply()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded mt-4">
              Apply Now
            </button>
          </div>
        </div>
      );
};

export default JobDetails;