import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {

    const job = useParams()
    console.log(job.id);

    

    const [jobDetail, setJobDetail] = useState({})
    useEffect(()=> {
        fetch('/featuredJobs.json')
        .then(res=> res.json())
        .then(data => {
            const foundJob = data.find(j => j.id == job.id);
            setJobDetail(foundJob);
        });
    }, []);

    return (
        <div>
            <h2>name: {jobDetail.companyName}</h2>
        </div>
    );
};

export default JobDetails;