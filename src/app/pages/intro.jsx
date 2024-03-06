"use client";
// Page.jsx
// Page.jsx
import React from "react";

const Page = () => {
  return (
    <>
      <div className="h-[49rem] relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-md">
        <div className="left md:w-1/2 text-center mr-4">
          <span className="text-white">Hey There 👋 I am</span>
          <h3 className="text-4xl font-bold mt-2 text-white">Nitin</h3>
          <h4 className="text-xl font-semibold text-gray-600">
            Professional <span className="text-blue-600">Data Engineer</span>
          </h4>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi earum quasi quos eaque deleniti ratione molestiae et quaerat quas?
          </p>
          <div className="actionsButtons mt-6">
            <button
              className="btn primaryBtnLite mr-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors">
              Contact Me
            </button>
            <button className="btn primaryBtnDark px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition-colors">Download CV</button>
          </div>
        </div>
        <div className="right md:w-1/3">
          <img src={"/Nitin.png"} width={450} height={450} alt="Profile" />
        </div>
      </div>
    </>
  );
};

export default Page;



