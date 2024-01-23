import React from "react";

const TaskTable = ({ showtask }) => {
  return (
    <div className="py-3 px-6 ">
      <div className="overflow-x-auto">
        <table className="table table-xs  ">
          <thead className="">
            <th className="text-sm font-medium text-white">Favourite</th>
            <th className="text-sm font-medium text-white">Title</th>
            <th className="text-sm font-medium text-white">Description</th>
            <th className="text-sm font-medium text-white">Tag</th>
            <th className="text-sm font-medium text-white">Action</th>
          </thead>
          <tbody>
            {showtask.map((item) => (
              <tr className="border-y border-[1px] border-white rounded-lg">
                <th>1</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
