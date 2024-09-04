import React,{useState}from "react"

function NewTodoForm(props){
    const [description,setDescription]=useState("");
    const [assigned,setAssigned] = useState("");

    const submitTodo = () => {

            if(description !=='' && assigned!==''){
                props.addTodo(description,assigned);
                setDescription("");  /* clearing the fields after adding values*/
                setAssigned("");
            }


    }
const descriptionChange = (event)=>{

    console.log("Description",event.target.value);
    setDescription(event.target.value); /*setting values to fields onchange */
}

const assignedChange = (event)=>{

    console.log("Assigned",event.target.value);
    setAssigned(event.target.value);   /*setting values to fields onchange */
}
return(
<div className="mt-5">
    <div className='mb-3'>
    <label className="form-label">Assigned</label>
    <input type="text" 
    className="form-control"
     onChange={assignedChange} 
     value={assigned} 
     required></input>
    </div>

    <div className='mb-3'>
    <label className="form-label">Description</label>
    <textarea className="form-control"
     rows={3} 
     onChange={descriptionChange} 
     value={description} 
     required></textarea>
    </div>
    
    <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add to do</button>
</div>


)

}

export default NewTodoForm