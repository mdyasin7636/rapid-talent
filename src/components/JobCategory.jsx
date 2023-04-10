import React from 'react';

const JobCategory = ({job}) => {
    const {categoryLogo, categoryName, availableJobs} = job
    return (
        <div className='rounded-lg p-4 flex flex-col items-center border'>
            <img src={categoryLogo} alt="" />
            <h3>{categoryName}</h3>
            <p>{availableJobs}</p>
        </div>
    );
};

export default JobCategory;