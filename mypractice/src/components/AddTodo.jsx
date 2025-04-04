import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const AddTodo = ({ onNewItem }) => {
  const [initialName, setInitialName] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const handleNameChange = (event) => {
    setInitialName(event.target.value);
  };
  const handleDateChange = (event) => {
    setInitialDate(event.target.value);
  };
  const handleAddBtn = () => {
    onNewItem(initialName, initialDate);
    setInitialName("");
    setInitialDate("");
  };
  return (
    <div className="row myrow">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter todo here"
          onChange={handleNameChange}
          value={initialName}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={handleDateChange} value={initialDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success myBtn"
          onClick={handleAddBtn}
        >
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};
export default AddTodo;
