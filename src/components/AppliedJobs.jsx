import React, { useEffect, useState } from 'react';
import AppliedJobsDetails from './AppliedJobsDetails';

const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const [apply, setApply] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const shoppingCartData = JSON.parse(localStorage.getItem('shopping-cart') || '{}');
    const save = appliedJob.filter(item => shoppingCartData[item.id])
    setApply(save)
  }, [appliedJob]);

  useEffect(()=> {
    fetch('/featuredJobs.json')
        .then(res => res.json())
        .then(data => {
          setAppliedJob(data);
        });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredJobs = apply.filter(job => {
    if (filter === '') {
      return true;
    } else if (filter === 'remote') {
      return job.jobType === 'Remote';
    } else if (filter === 'onsite') {
      return job.jobType === 'Onsite';
    }
  });

  return (
    <div>
      <div className='bg-indigo-50 text-center p-12'>
        <h1 className='text-2xl font-bold pb-4'>Applied Jobs</h1>
      </div>
      <div className='flex justify-end items-center mt-5 mr-5'>
        <button onClick={() => handleFilterChange({ target: { value: 'remote' } })} className={`border rounded-lg p-2 font-semibold text-white ${filter === 'remote' ? 'bg-indigo-500 mr-2' : 'bg-gray-300 mr-2'}`}>Remote</button>
        <button onClick={() => handleFilterChange({ target: { value: 'onsite' } })} className={`border rounded-lg p-2 font-semibold text-white ${filter === 'onsite' ? 'bg-indigo-500' : 'bg-gray-300'}`}>Onsite</button>
      </div>
      {filteredJobs.map(d => <AppliedJobsDetails key={d.id} d={d} />)}
    </div>
  );
};

  export default AppliedJobs;