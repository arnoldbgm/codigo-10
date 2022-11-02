function TaskForm() {
  return (
    <div className="card p-3 shadow">
      <div className="input-group">
        <input
          id="input_task"
          type="text"
          className="form-control"
          placeholder="My new task..."
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
