import PropTypes from 'prop-types';

const CreateTodoForm = ({handleAddTodos}) => {
  return (
    <div className="md:w-1/2 space-y-5">
      <h1 className="text-center font-bold text-xl lg:text-4xl">Add Task</h1>

      <form onSubmit={handleAddTodos} className="space-y-3 p-3 text-[12px] md:text-[15px]">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          <label
            className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-green-200 outline-none"
            type="text"
            name="name"
            placeholder="Enter task name"
            required
          />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          <label
            className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-green-200 outline-none"
            type="text"
            name="description"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          <label
            className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
            htmlFor="priority"
          >
            Priority
          </label>
          <select
            className="col-span-2 md:col-span-3 lg:col-span-5 text-[12px] md:text-[15px] px-2 py-2 bg-green-200 outline-none"
            name="priority"
            required
          >
            <option value="none">Select Task Priority Level</option>
            <option value="3">High</option>
            <option value="2">Moderate</option>
            <option value="1">Low</option>
          </select>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          <label
            className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
            htmlFor="deadline"
          >
            Deadline
          </label>
          <input
            className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-green-200 outline-none"
            type="date"
            name="deadline"
            required
          />
        </div>

        <input
          className="w-full text-center text-xl text-white font-bold rounded-full py-1 lg:py-2 bg-green-500 transition-colors duration-700 hover:bg-[#fb9c00]"
          type="submit"
          value="Create"
        />
      </form>
    </div>
  );
};

CreateTodoForm.propTypes ={
  handleAddTodos: PropTypes.func
}

export default CreateTodoForm;
