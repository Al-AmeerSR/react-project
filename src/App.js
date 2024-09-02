
import './App.css';
import TodoTable from './components/TodTable';

function App() {

  const todos =[
    { rowNumber : 1,rowDescription:'Feed the puppy',rowAssignee:'user1'},
    {rowNumber : 2,rowDescription:'Read book',rowAssignee:'user2'},
    {rowNumber : 3,rowDescription:'Cook dinner',rowAssignee:'user1'},
    {rowNumber : 4,rowDescription:'charge phone',rowAssignee:'user2'}
  ]

  const addTodo = ()=>{
 
    const newTodo = {rowNumber : todos.length + 1 ,rowDescription:'charge the laptop',rowAssignee :'user3'}
   
   todos.push(newTodo)
   console.log(todos)
  }
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body" >
         
        <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>
            Add New todo
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
