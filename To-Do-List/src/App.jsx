import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  const [tasks, setTasks] = useState([]);

  function nameOfTask(e) {
    setName(e.target.value);
  }

  function addTask() {
    setTasks([...tasks, {
      id: index,
      name: name,
      display: true,
    }]);
    
    setIndex(index + 1);
    setName("");
  }

  function deleteTask(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, display: false };
      }
      return task;
    }));
  }

  return (
    <div className="app">
      <div className='additem'>
        <label className="input-details" htmlFor="item">
          <h2>New Task</h2>
          <input
            type="text"
            onChange={(e) => nameOfTask(e)}
            id="item"
            placeholder='add task ...'
          />
        </label>
        <button
          className="addbtn"
          type="button"
          onClick={() => addTask()}
        >
          Add Task
        </button>
      </div>

      <div className='displaytask'>
        <div className="stmt">
          {tasks.length === 0 ? (<div><h1>Nothing To-Do </h1><h4 style={{color:"white"}}>Sit Back & Relax </h4></div>) : (<h1>To-Do List</h1>)}
        </div>
        <ul className='taskslist'>
          {tasks.map((task) => (
            task.display && (
              <li className="elements" key={task.id}>
                <label>
                <input type="checkbox" /> {task.name}
                </label>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
}
