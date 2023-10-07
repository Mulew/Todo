import React, { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handledelete = (idx) =>{
    const newtasks=tasks.filter((ttask,index)=>index!==idx);
    setTasks(newtasks);
  }

//   const handleEdit = (idx) => {
//     const updatedTasks = [...tasks];
//     const oldvalue = tasks.filter((ttask, index) => index === idx)[0];
//     const newvalue = task;
  
//     updatedTasks[idx] = newvalue;
//     setTasks(updatedTasks);
//     setTask(''); // Move this line here to reset the task input field after updating the task
//   };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">Tasks &nbsp;[{tasks.length}]</h1>
      <hr/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col">Task</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{task}</td>
              <td>
                {/* <button onClick={()=>handleEdit(index)}  className="btn btn-primary me-2" style={{ backgroundColor: '#FFC107', color: '#000000' }}>Edit</button> */}
                <button onClick={()=>handledelete(index)} className="btn btn-danger" style={{ backgroundColor: '#F44336', color: '#FFFFFF' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" name="task" value={task} onChange={handleChange} placeholder="Insert task name" required />
          <button type="submit" className="btn btn-primary">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default Tasks;