
import './App.css';
import Header from './components/Header';
import { useState} from 'react';
import React from 'react';
import Tasks from './components/Tasks';


function App() {
  
  const[tasks , setTasks]=useState([
    {
    id:1 ,
    text:'Doctors Appointment',
    day:'Feb 5th at 2:30 pm',
    reminder: true},
    {
        id:2 ,
        text:'Meeting at School',
        day:'Feb 6th at 6:30 pm',
        reminder: true},
        {
            id:3 ,
            text:'Food Shopping',
            day:'Feb 10th at 6:30 pm',
            reminder: false},   
])
const deleteTask=(id) =>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
const toggleReminder= (id)=>{
  console.log(id)
}

  return (
    <div className="container">
      <Header  />
      {tasks.length >0  ? (<Tasks tasks= {tasks} onDelete={deleteTask}/>) : ('No Tasks To Show')}
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class </h1>
//   }
// }

export default App;
