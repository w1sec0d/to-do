const Create = ({ ...props }) => {
  return (
    <div className="flex flex-row" {...props}>
      <input type="text" className="mr-5 p-4 rounded-md"></input>
      <button className="bg-slate-600 px-4 py-2 rounded-md">Add</button>
    </div>
  );
};

export default Create;
