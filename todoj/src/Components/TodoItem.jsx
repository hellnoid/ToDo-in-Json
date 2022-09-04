import React from 'react'
// import { useDispatch } from 'react-redux'
// import { del } from '../../redux/Todo/action';


export const TodoItem = ({title,status,id,handleDelete,handleUpdate}) => {
//   const dispatch =useDispatch();
//   const handleDelete=()=>{
//        dispatch(del(id))
//   }
  return (
    <div>
        <p>{title}{"----->"}{status?"COMPLETED":"NOT COMPLETED"}</p>
        <button onClick={()=>handleDelete(id)}> Delete</button>
        <button onClick={()=>handleUpdate(id)}>Update</button>
    </div>
  )
}