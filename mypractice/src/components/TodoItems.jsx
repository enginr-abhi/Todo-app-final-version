import TodoItem from "./TodoItem";
const TodoItems = ({ myItems, onDeleteClick }) => {
  return (
    <div className="textleft">
      {myItems.map((item) => (
        <TodoItem
          todoName={item.name}
          tododate={item.dueDate}
          key={item.name}
          onDelete={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
