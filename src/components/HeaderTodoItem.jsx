import '../styles/todo.css'
import ToDoItem from './ToDoItem';

const HeaderTodoItem = ({ theme }) => {
    const headerItem = {
        "cross-flag": false,
        "check-flag": false,
        "content": "Create a new todo...",
        completed: false,
        type: "header"
    }

    return (
      <div className={`header-todo-item ${theme}`}>
        <ToDoItem item={headerItem}></ToDoItem>
      </div>
    );
  };
  
  export default HeaderTodoItem;