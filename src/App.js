import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodTable';
import NewTodoForm from './components/NewTodoForm';
function App() {

  const [showAddToDoForm,setshowAddToDoForm] = useState(false);

  const [todos,setTodos] =useState([
    { rowNumber : 1,rowDescription:'Feed the puppy',rowAssignee:'user1'},
    {rowNumber : 2,rowDescription:'Read book',rowAssignee:'user2'},
    {rowNumber : 3,rowDescription:'Cook dinner',rowAssignee:'user1'},
    {rowNumber : 4,rowDescription:'charge phone',rowAssignee:'user2'}
  ])

  const addTodo = (description,assigned)=>{

    let rowNumber = 0;
 if(todos.length>0){

    rowNumber=todos[todos.length - 1].rowNumber + 1;

  }else{

    rowNumber = 1;
  } 
  const newTodo = {rowNumber : rowNumber ,rowDescription:description,rowAssignee :assigned} 
  setTodos(todos => [...todos,newTodo]);
   console.log(todos)
  
  }

  const deleteTodo = (deleteTodorowNumber) =>{

    let filtered = todos.filter(function(value){

      return value.rowNumber !== deleteTodorowNumber;
    });

    setTodos(filtered);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body" >
         
        <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={()=>setshowAddToDoForm(!showAddToDoForm)}>New ToDo</button>
            {showAddToDoForm &&   <NewTodoForm addTodo={addTodo}/>  }  {/* passing a method as props */}
          
        </div>
      </div>
    </div>
  );
}

export default App;
