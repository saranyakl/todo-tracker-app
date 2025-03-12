import '../styles/todo.css';
import checkIcon from '../images/icon-check.svg';
import crossIcon from'../images/icon-cross.svg';

const ToDoItem = ({ theme, item }) => {
    const check = checkIcon;
    const crossDisplay = item["cross-flag"] || false;
    const checkDisplay = item["completed"] || false;
    const completedClassName = item["completed"] ? "completed" : "";
    return (
      <div className={`todo-item-wrapper ${theme} ${item["type"]}`}>
        <div className={`${completedClassName} todo-check-wrapper`}>
            {checkDisplay && <img src={check} alt="checkIcon" className='check-icon todo-icon'/> }
        </div>
        <div className='todo-item-content'>
            <p className='todo-content'>{item["content"]}</p>
        </div>
        <div className='todo-item-cross'>
            {crossDisplay && <img src={crossIcon} alt="crossIcon" className='cross-icon todo-icon'/> }
        </div>
      </div>
    );
  };
  
  export default ToDoItem;