import React from "react";

const Navbar = () => {
  return (
    <div className="">
      {/* <img
        className="h-20 w-40 "
        src="https://i.ibb.co/x6W9DB0/run-task-logo-template-design-260nw-759974974-removebg-preview.png"
      ></img>
      <p>E-Task</p> */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-yellow-300 text-7xl font-semibold">Tasker</h1>
          <p className="text-sm text-white font-normal w-96">
            Effortlessly organize,prioritize,and Conquer tasks with Tasker -
            your personal productivity any for seamless goal achievement and
            stress-free task management.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/0nBD0wz/flat-lay-abstract-innovation-assortment-23-2148909082-removebg-preview-1.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
