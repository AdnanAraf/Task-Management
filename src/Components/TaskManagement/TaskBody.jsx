import React, { useState } from "react";
import Button from "./Button";
import TaskTable from "./TaskTable";
import TaskModal from "./TaskModal";

const TaskBody = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <div>
      <div className="flex justify-between py-12 px-6">
        <h1 className="text-white text-[18px] font-semibold ">Your Tasks</h1>
        <div>
          <Button setshowModal={() => setshowModal(!showModal)} />
        </div>
      </div>
      <div>
        <TaskTable />
        {showModal && <TaskModal />}
      </div>
    </div>
  );
};

export default TaskBody;
