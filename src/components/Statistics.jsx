import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const assignmentMarks = [
    {
      name: "Assignment 1",
      number: 60,
    },
    {
      name: "Assignment 2",
      number: 50,
    },
    {
      name: "Assignment 3",
      number: 60,
    },
    {
      name: "Assignment 4",
      number: 60,
    },
    {
      name: "Assignment 5",
      number: 60,
    },
    {
      name: "Assignment 6",
      number: 59,
    },
    {
      name: "Assignment 7",
      number: 60,
    },
    {
      name: "Assignment 8",
      number: 58,
    },
  ];

  return (
    <div className="mt-16 mx-10">
        <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={assignmentMarks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area dataKey="number" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
