import { MdDeleteForever } from "react-icons/md";
const TodoItem = ({ todoName, tododate, onDelete }) => {
  return (
    <div className="row myrow">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger myBtn"
          onClick={() => onDelete(todoName)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
