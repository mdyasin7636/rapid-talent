import React, { useEffect, useState } from 'react';

const AppliedJobs = () => {
    const [appliedJob, setAppliedJob] = useState({});
    
    useEffect(() => {
      const shoppingCartData = JSON.parse(localStorage.getItem('shopping-cart'));
      const jobIds = Object.keys(shoppingCartData || {});
      const appliedJobId = jobIds.length ? jobIds[0] : null;
    
      if (appliedJobId) {
        fetch('/featuredJobs.json')
          .then(res => res.json())
          .then(data => {
            const foundJob = data.find(job => job.id == appliedJobId);
            setAppliedJob(foundJob);
          });
      } else {
        setAppliedJob(null);
      }
    }, []);
  
    return (
      <div>
        {appliedJob ? (
          <div>Name: {appliedJob.jobTitle}</div>
        ) : (
          <div>No job applied yet</div>
        )}

        <div>

        <div className="flex justify-between mt-20 border rounded-lg mx-40 px-5 py-10">
        <div className="flex">
          <img
            className="rounded w-30 h-30"
            src="https://i.ibb.co/hdw5gPD/google.png"
            alt=""
          />
          <div className="ml-2">
            <h1 className="font-bold text-base">Front-End Developer</h1>
            <p className="font-semibold text-sm text-gray-500">Google</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-2 font-semibold text-base text-gray-500">
          </p>
          <span></span>
        </div>
      </div>

        </div>

      </div>
    );
  };


  export default AppliedJobs;