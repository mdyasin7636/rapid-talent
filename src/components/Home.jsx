import React from "react";



const Home = () => {
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
        <div>
        <h1>Job Category List</h1>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="bg-indigo-50 ">
            <img src="https://i.ibb.co/W34sKKB/social-media-1.png" alt="" />
            <h3>Account & Finance</h3>
            <p>300 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
