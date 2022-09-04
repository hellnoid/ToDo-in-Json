import React from 'react'
import { useEffect } from 'react';
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem';
import { useSelector,useDispatch } from 'react-redux';
import { updateTodos,loaDing,erRor } from '../Redux/action';

export function Todo() {
    const dispatch=useDispatch()
  const {todos,loading,error}=useSelector(state=>state)

    const getTodos=()=>{
        console.log("getTodos");
        dispatch(loaDing())
        fetch(`http://localhost:8080/todo`)
        .then((res)=> res.json())
        .then((res)=> {dispatch(updateTodos(res))})
        .catch(()=>dispatch(erRor()))
    };

    useEffect(()=> {getTodos()},[])
 
    const handleDelete=(id)=>{
        fetch(`http://localhost:8080/todo/${id}`,{
        method:"DELETE"
    })
    .then(()=>getTodos());
    }

   const handleUpdate=(id)=>{
    const payload1={
        status: !todos.find((item)=>item.id===id).status
    }
    fetch(`http://localhost:8080/todo/${id}`,{
        method:"PATCH",
        body:JSON.stringify(payload1),
        headers:{"Content-Type":"application/json"}
    })
    .then(()=>getTodos());
   }

  return (
    <div>
        <TodoInput getTodos={getTodos}/>
        <br />
        {loading?(<div>Loading</div>):error?(<div>Error</div>): todos.map((todo)=>(
          <TodoItem key={todo.id}{...todo} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        ))}
    </div>
  )
}
