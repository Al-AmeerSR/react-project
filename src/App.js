
import './App.css';
import TodoTable from './components/TodTable';

function App() {

  const todos =[
    { rowNumber : 1,rowDescription:'Feed the puppy',rowAssignee:'user1'},
    {rowNumber : 2,rowDescription:'Read book',rowAssignee:'user2'},
    {rowNumber : 3,rowDescription:'Cook dinner',rowAssignee:'user1'},
    {rowNumber : 4,rowDescription:'charge phone',rowAssignee:'user2'}
  ]
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body" >
         
        <TodoTable todos={todos}/>
    
        </div>
      </div>
    </div>
  );
}

export default App;
