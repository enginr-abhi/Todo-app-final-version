import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoHeading from "./components/TodoHeading";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoArr, setTodoArr] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newitem = { name: itemName, dueDate: itemDate };
    const newArr = [...todoArr, newitem];
    setTodoArr(newArr);
  };
  const handleDeleteclick = (todoName) => {
    const newitem = todoArr.filter((item) => item.name !== todoName);
    setTodoArr(newitem);
  };

  return (
    <center className="container">
      <TodoHeading />
      <AddTodo onNewItem={handleNewItem} />
      {todoArr.length === 0 && <WelcomeMessage />}
      <TodoItems myItems={todoArr} onDeleteClick={handleDeleteclick} />
    </center>
  );
}

export default App;
