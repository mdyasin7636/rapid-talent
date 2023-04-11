import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AppliedJobs = () => {
    const [appliedJob, setAppliedJob] = useState([]);
    const appliedJobId = localStorage.getItem('shopping-cart');
    
    useEffect(() => {
        fetch('/featuredJobs.json')
            .then(res => res.json())
            .then(data => {
                const foundJob = data.filter(job => job.id == appliedJobId);
                setAppliedJob(foundJob);
            });
    }, [appliedJobId]);

    return (
        <div>
            <div>Name: {appliedJob.jobTitle}</div>
        </div>
    );
};
export default AppliedJobs;