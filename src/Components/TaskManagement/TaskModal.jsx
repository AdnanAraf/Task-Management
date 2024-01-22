import React, { useState } from "react";

const TaskModal = () => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log("Form submitted with title:", title);
    // Reset the form or perform any other necessary actions
    setTitle("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-[#111827] opacity-75"></div>
      <div className="relative bg-[#475569] px-6 py-6 rounded-lg w-full max-w-[740px]">
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4 flex gap-8 ">
            <label
              htmlFor="title"
              className="text-sm w-[100px] text-black font-medium"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full max-w-[320px] outline-none h-[44px] rounded-lg px-3"
              placeholder="Enter task title"
              required
            />
          </div>
          {/* ***** Description  *********/}

          <div className="flex gap-8 ">
            <label className="text-sm text-black font-medium w-[100px]">
              Description:
            </label>
            <textarea
              type="text"
              // name="descrription"
              // value={description}
              onChange={handleTitleChange}
              className="w-full max-w-[320px] resize-none outline-none h-[80px] rounded-lg px-3 py-2"
              placeholder="Enter task Description"
              required
            ></textarea>
          </div>

          {/**********Tags********/}

          <div className="flex gap-8 py-3">
            <label className="text-sm text-black font-medium w-[100px]">
              Tags
            </label>

            <input
              type="text"
              id="title"
              // name="title"
              // value={title}
              onChange={handleTitleChange}
              className="w-full max-w-[320px] outline-none h-[44px] rounded-lg px-3"
              placeholder="Enter task tags"
              required
            />
          </div>
          {/********** Priority **************/}
          <div className="flex gap-8">
            <label className="text-sm font-medium text-black w-[100px]">
              Priority:
            </label>

            <select className="w-full max-w-[320px] outline-none rounded-lg py-2 px-3 ">
              <option>Select an Option</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className=" bg-[#2E90FA] text-white  px-4 py-2 rounded-md text-sm font-medium"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
