import { useState } from "react";
export function NewTodoForm({ onSubmit }){
    const[newItems, setNewItems] = useState("") 
    function handleSubmit(e){
     e.preventDefault()
      if(newItems==="") return
        onSubmit(newItems);
        setNewItems("")
        }
    return (
    <form className='new-item-form'
    onSubmit={handleSubmit}>
    <div className='form-row'>
      <label htmlFor='items'>New Item</label>
      <input value={newItems} 
       onChange={e=>setNewItems(e.target.value)}
       type='text' 
       id='items'
       />
    </div>
    <button className='btn'>Add Items</button>
   </form>
    )
}