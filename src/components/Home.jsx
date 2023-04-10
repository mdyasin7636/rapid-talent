import React, { useEffect, useState } from "react";
import JobCategory from "./JobCategory";

const Home = () => {
  
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(()=>{
    fetch('jobCategoryList.json')
    .then(res=>res.json())
    .then(data => setJobCategory(data))
  }, [])
  
  return (
    <div>
      <div className="banner-container flex flex-col md:flex-row items-center justify-center bg-indigo-50 px-16">
        <div className="w-full md:w-1/2 px-4 py-8 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-4">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-indigo-500">Dream Job</span>{" "}
          </h1>
          <p className="mb-4 text-zinc-600 font-medium">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. <br /> Manage
            all your job application from start to finish.
          </p>
          <button className="px-4 py-2 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://i.ibb.co/99Cp5q7/person.png"
            alt="person"
            className="mx-auto md:ml-auto md:mr-0"
          />
        </div>
      </div>
      <div>
        <div className="text-center mt-10 pt-6">
        <h1 className="text-4xl font-bold">Job Category List</h1>
        <p className="text-zinc-600 font-medium mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-6">
            {
              jobCategory.map(job => <JobCategory
              key={job.id}
              job={job}
              ></JobCategory>)
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
