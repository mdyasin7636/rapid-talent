import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mx-10 mt-10">
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            Q: When should we use context API?
          </h1>
          <p className="text-lg font-medium text-teal-950">
            Ans: We should use the React Context API when we need to share data between components that are not directly related to each other, to avoid prop drilling and simplify state management, especially in large-scale applications.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            Q: What is a custom hook?
          </h1>
          <p className="text-lg font-medium text-teal-950">
            Ans: Custom hook is a JavaScript function that uses React's built-in hooks to encapsulate reusable stateful logic, it allows us to abstract away complex logic and share it across multiple components, making our code more modular and easier to maintain.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            Q: What is useRef?
          </h1>
          <p className="text-lg font-medium text-teal-950">
            Ans: useRef is a built-in hook in React that provides a way to create a mutable reference to an element or value, it can be used to access the DOM nodes directly, manage focus, implement animations and more, it returns a ref object that persists between renders and can be updated without triggering a re-render of the component.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            Q: What is useMemo?
          </h1>
          <p className="text-lg font-medium text-teal-950">
            Ans: useMemo is a React hook that memoizes a function and caches its result, recalculating only when its dependencies change, it is used to optimize expensive calculations and prevent unnecessary re-renders in a component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
