import React from 'react';

const JobCategory = ({job}) => {
    const {categoryLogo, categoryName, availableJobs} = job
    return (
        <div className='rounded-lg p-4 flex flex-col items-center border bg-indigo-50 h-36 w-64 mb-10 mx-8'>
            <img src={categoryLogo} alt="" />
            <h3>{categoryName}</h3>
            <p>{availableJobs}</p>
        </div>
    );
};

export default JobCategory;