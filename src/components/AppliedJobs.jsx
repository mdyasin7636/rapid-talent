import React, { useEffect, useState } from 'react';
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import AppliedJobsDetails from './AppliedJobsDetails';

const AppliedJobs = () => {
    const [appliedJob, setAppliedJob] = useState([]);
    const [apply, setApply] = useState([]);
    
    useEffect(() => {
     const shoppingCartData = JSON.parse(localStorage.getItem('shopping-cart') || '{}' );
     const save = [] 

 for(const id in shoppingCartData){
  const current = appliedJob.find(item => item.id == id)
  if(current){
    save.push(current)
  }
 }
 setApply(save)

    }, [appliedJob]);
  
    useEffect(()=> {
      fetch('/featuredJobs.json')
          .then(res => res.json())
          .then(data => {
            setAppliedJob(data);
          });
    }, [])

    return (
      <div>
        <div className='bg-indigo-50 text-center p-12'>
          <h1 className='text-2xl font-bold pb-4'>Applied Jobs</h1>
          </div>
        {apply.map(d => <AppliedJobsDetails
          d={d}
          ></AppliedJobsDetails>
            )
        }
      </div>
    );
  };


  export default AppliedJobs;