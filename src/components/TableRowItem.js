
function TableRowItem(props){
    return(

        <tr>
            <th>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssignee}</td>
            <button className="btn btn-danger" onClick={()=>props.deleteTodo(props.rowNumber)}>Delete</button>
        </tr>

    )
}
export default TableRowItem