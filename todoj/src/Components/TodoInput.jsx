import { useState } from "react";
// import {v4 as uuid } from "uuid";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../../redux/Todo/action";


export const TodoInput=({getTodos})=>{
const [title,setTitle] = useState("");
// const dispatch =useDispatch();

const handleAdd=()=>{
    const payload ={
        title,
        status:false,
        // id:uuid(),
    };
//    dispatch(addTodo(payload));
fetch("http://localhost:8080/todo",{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
        "Content-Type":"application/json"
    }
}).then(()=>getTodos() )
}
return (<div>
    <input type="text" placeholder="Add new ToDo's" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <button onClick={handleAdd}>ADD TODOS</button>
</div>)
}