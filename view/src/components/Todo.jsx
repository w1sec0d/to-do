import { CheckCircle, CheckCircleSolid, TrashSolid } from "iconoir-react";

const Todo = ({ task, handleCheck, handleDelete }) => {
  return (
    <div className="bg-[#3b3b3b] my-2 min-w-64 px-4 py-2 rounded-md hover:cursor-pointer flex flex-row">
      {task.isDone ? (
        <CheckCircleSolid className="mr-5" />
      ) : (
        <CheckCircle onClick={() => handleCheck(task._id)} className="mr-5" />
      )}
      <p className={`${task.isDone ? "line-through" : ""}`}>{task.task}</p>
      <TrashSolid onClick={() => handleDelete(task._id)} className="ml-auto" />
    </div>
  );
};

export default Todo;
