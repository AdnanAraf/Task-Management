import React from "react";

const TaskTable = () => {
  return (
    <div className="py-6">
      <div className="flex justify-between px-6 ">
        <p className="text-white font-medium text-sm">Favourite</p>
        <p className="text-white font-medium text-sm">Title</p>
        <p className="text-white font-medium text-sm">Description</p>
        <p className="text-white font-medium text-sm">Tags</p>
        <p className="text-white font-medium text-sm">Priority</p>
        <p className="text-white font-medium text-sm">Options</p>
      </div>

      <div className="py-6 ">
        <div className="flex justify-between pl-20 items-center px-6 py-3  odd:bg-[#38BDF8]">
          <p></p>
          <p className="text-white font-normal text-sm">API</p>
          <p className="text-white font-normal text-sm">Description</p>
          <p className="text-white font-normal text-sm">Tags</p>
          <p className="text-white font-normal text-sm">Priority</p>
          <p className="text-white font-normal text-sm">Options</p>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
