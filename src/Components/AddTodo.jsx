
import "./Todo.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodosSlice";
import "./Todo.css";

const AddTodo = () => {
    const [todoText, setTodoText] = useState("")
    const dispatch = useDispatch();

    // handle add Todo
    const handleAddTodo = () => {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        }
        dispatch(addTodo(todo))
        setTodoText("");
    }
  return (
    <div>
        <input
         type="text" 
         value={todoText} 
         onChange={(e) => setTodoText(e.target.value)}/>
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default AddTodo;