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
        <div>
          <div className='bg-indigo-50 text-center p-12'>
          <h1 className='text-2xl font-bold pb-4'>Job Details</h1>
          </div>
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
            <div className="font-bold mb-4 border-b">Job Details:</div>
            <div className='mb-2'><span className="font-bold">Salary:</span> {jobDetail.salary} (Per Month)</div>
            <div className='mb-2'><span className="font-bold">Job Title:</span> {jobDetail.jobTitle} </div>
            <div className="font-bold mb-4 mt-4 border-b">Contact Information:</div>
            <div>
            <div className='mb-2'><span className="font-bold">Phone:</span> {jobDetail.phone} </div>
            <div className='mb-2'><span className="font-bold">Email:</span> {jobDetail.email} </div>
            <div className='mb-2'><span className="font-bold">Address:</span> {jobDetail.address} </div>
            </div>
            <button onClick={()=> handleApply()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded mt-4">
              Apply Now
            </button>
          </div>
        </div>
        </div>
      );
};

export default JobDetails;