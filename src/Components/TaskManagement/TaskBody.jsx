import React, { useState } from "react";
import Button from "./Button";
import TaskTable from "./TaskTable";
import TaskModal from "./TaskModal";

const TaskBody = () => {
  const [showModal, setshowModal] = useState(false);
  const [showtask, setShowTask] = useState([]);
  function handleAddtask(task) {
    setShowTask([...showtask, task]);
    setshowModal(false);
    console.log(task);
  }
  return (
    <div>
      <h1>Adnan Araf</h1>
      <div>
        {showModal && (
          <TaskModal
            setshowModal={() => setshowModal(!showModal)}
            onSave={handleAddtask}
          />
        )}
        <div className=" bg-gray">
          <div className="flex justify-between py-12 px-6">
            <h1 className="text-white text-[18px] font-semibold ">
              Your Tasks
            </h1>
            <div>
              <Button setshowModal={() => setshowModal(!showModal)} />
            </div>
          </div>
          <div>
            <TaskTable showtask={showtask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBody;
