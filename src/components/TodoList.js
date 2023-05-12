import React , {useState}from 'react';
import CreateTask from './modals/CreateTask';
const TodoList = () => {
    const [modal , setModal] = useState(false);
    const [taskList , setTasKList] = useState([]);
    // this function will just toggle the modal depending upon the previous modal state
    
    const toggle = () =>{
        setModal(!modal);
    }
    const saveTask = (taskObj) =>{
        let tempList = [...taskList , taskObj];
        setTasKList(tempList);
        setModal(false);
    }
    return (
        <React.Fragment>

            <div className='header text-center'>
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-3" onClick={()=>setModal(true)}>Create Task</button>
            </div>
            <div className='task-container'>
             {taskList.map((tasks)=> <li>{tasks.Name}</li>)}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </React.Fragment>
    );
};

export default TodoList;