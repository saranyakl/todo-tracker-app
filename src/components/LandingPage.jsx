import { useState } from 'react'
import '../styles/main.css'
import BackgroundDiv from "./BackgroundDiv";
import darkIcon from '../images/icon-sun.svg';
import lightIcon from '../images/icon-moon.svg';
import HeaderTodoItem from './HeaderTodoItem';
import ToDoItem from './ToDoItem';

function LandingPage() {
  const [theme, setTheme] = useState("dark-mode");

  const items = [
    {
    "cross-flag": true,
    "content": "Complete video editing",
    completed: true,
    type: "todo"
    },
    {
      "cross-flag": true,
      "content": "Shoot new video",
      completed: false,
      type: "todo"
    }
]
  const toggleTheme = () => {
    setTheme(theme=="dark-mode" ? "light-mode" : "dark-mode")
  };
  const myIcon = theme=="dark-mode" ? darkIcon : lightIcon;
  return (
    <>
      <div className={`body-wrapper ${theme}`}>
        <BackgroundDiv theme={theme}/>
        <div className='mainContent-wrapper'>
          <div className='todo-header'>
            <h2 className='todo-title'>TODO</h2>
            <img src={myIcon} alt="Icon" className='toggle-icon' width="25" height="25" onClick={() => toggleTheme()}/>
          </div>
          <HeaderTodoItem theme={theme}></HeaderTodoItem>
          <div className='todo-items'>
          {
            items && items.length>0 && items.map((item) => (
              <ToDoItem theme={theme} item={item}></ToDoItem>
            ))
          }
          </div>
          
        </div>
      </div>
    </>
  )
}

export default LandingPage
