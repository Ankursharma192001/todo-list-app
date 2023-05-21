import React, { useEffect, useState } from "react";
import CreateTask from "./modals/CreateTask";
import Card from "./Card";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTasKList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTasKList(obj);
    }
  }, []);

  // delete task

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTasKList([...tempList]);
    // window.location.reload();
  };

  const updateListArray= (obj , index)=>{
      
      let tempList = taskList;
      tempList[index] = obj;
      localStorage.setItem('taskList',JSON.stringify(tempList));
      setTasKList([...tempList]);  
      window.location.reload();    
  }


  // this function will just toggle the modal depending upon the previous modal state

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = [...taskList, taskObj];
    setTasKList(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
    
  };
  return (
    <React.Fragment>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-3" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList && taskList.map((tasks, index) => (
          <Card taskObj={tasks} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </React.Fragment>
  );
};

export default TodoList;
