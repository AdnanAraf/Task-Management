import React, { useState } from "react";
import Divider from "../Divider/Divider";
import close from "../../assets/x-close.png";

const TaskModal = ({ setshowModal, onSave }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    tags: [],
    priority: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    console.log(name);
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-[#111827] opacity-75"></div>

      <div className="relative bg-[#475569] opacity-80 px-6 py-6 rounded-lg w-full  max-w-[740px]">
        <div className="flex justify-between ">
          <h1 className="text-2xl text-white ">Your task form</h1>
          <div className="h-10 w-10 hover:bg-gray opacity-75 rounded-full relative">
            <img
              onClick={setshowModal}
              className="h-5 w-5 absolute top-0 left-0 right-0 bottom-0 m-auto cursor-pointer "
              src={close}
            ></img>
          </div>
        </div>
        <Divider />
        {/* Title */}
        <div className="mb-4 flex gap-8 py-6 ">
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
            value={task.title}
            onChange={handleChange}
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
            name="description"
            id="description"
            value={task.description}
            onChange={handleChange}
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
            id="tag"
            name="tags"
            value={task.tags}
            onChange={handleChange}
            className="w-full max-w-[320px] outline-none h-[44px] rounded-lg px-3"
            placeholder="Enter task tags"
            required
          />
        </div>

        {/********** Priority **************/}

        <div className="flex gap-8">
          <label className="text-sm font-medium text-black w-[100px]">
            Priority
          </label>

          <select
            className="w-full max-w-[320px] outline-none rounded-lg py-2 px-3 "
            name="priority"
            value={task.priority}
            onChange={handleChange}
            id="priority"
            placeholder="select an Option"
            required
          >
            {/* <option>Select an Option</option> */}
            <option value="" disabled>
              Select an Option
            </option>

            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <Divider />

        <div className="flex justify-end pt-10">
          <button
            type="submit"
            onClick={() => onSave(task)}
            className=" bg-[#2E90FA] text-white  px-4 py-2 rounded-md text-sm font-medium"
          >
            Create new task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
