import React, { useEffect, useState } from "react";
import JobCategory from "./JobCategory";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  
  const [jobCategory, setJobCategory] = useState([]);
  const [numFeaturedJobs, setNumFeaturedJobs] = useState(4);

  useEffect(()=>{
    fetch('/jobCategoryList.json')
    .then(res=>res.json())
    .then(data => setJobCategory(data))
  }, [])

  const jobs = useLoaderData()
  
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
        <div className="text-center mb-10 mt-10 pt-6">
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
      <div>
      <div className="text-center mb-10 mt-10 pt-6">
        <h1 className="text-4xl font-bold">Featured Jobs</h1>
        <p className="text-zinc-600 font-medium mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-2 px-2 md:grid-cols-2 mt-6">
        {jobs.slice(0, numFeaturedJobs).map(job => <FeaturedJobs key={job.id} job={job}></FeaturedJobs>)}
        </div>
        <div className="text-center">
        {numFeaturedJobs < jobs.length ? <button className="px-4 py-2 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 mt-6 mb-6" onClick={() => setNumFeaturedJobs(jobs.length)}>See All Jobs</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
