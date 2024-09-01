function TableRowItem(props){
    return(

        <tr>
            <th>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssignee}</td>
        </tr>

    )
}
export default TableRowItem