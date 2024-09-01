

import TableRowItem from './TableRowItem';
function TodoTable(props){
return(
    <table className="table table-hover">
             <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Assigned</th>
                </tr>
              </thead>
              <tbody>     
                    { props.todos.map(todo=>(

                        <TableRowItem rowNumber={todo.rowNumber}
                        rowAssignee={todo.rowAssignee}
                        rowDescription={todo.rowDescription}
                        />
                    ))}
             </tbody>
     </table>

)


}
export default TodoTable