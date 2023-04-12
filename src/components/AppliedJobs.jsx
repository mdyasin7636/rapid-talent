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
        {apply.map(d => <AppliedJobsDetails
          d={d}
          ></AppliedJobsDetails>
            )
        }
      </div>
    );
  };


  export default AppliedJobs;