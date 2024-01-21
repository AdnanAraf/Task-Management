import React from "react";

const Button = ({ setshowModal }) => {
  return (
    <div>
      <div className="flex gap-3">
        <button
          onClick={setshowModal}
          className=" bg-primary-600 px-3 py-2 text-white font-medium rounded-lg"
        >
          Add Task
        </button>
        <button className=" bg-red px-3 py-2 text-white font-medium rounded-lg">
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Button;
