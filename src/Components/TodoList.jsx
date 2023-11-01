
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./TodoCard"
import { deleteTodo, editTodo, toggleComplete } from "../redux/TodosSlice";
import { useState } from "react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false)

  // handle todo done
  const handleTodoDone = (todoId) => {
    // get todo element class
    const todo = document.getElementById(todoId);
    // toggle todo element class 
    todo.classList.toggle("completed");
    dispatch(toggleComplete(todoId));
  };

    // handle todo edit
  const handleTodoEdit = (todoId) => {
    setIsEditable(true)
  // get todo element
  const todo = document.getElementById(todoId);
  // make todo editable
  todo.contentEditable = true;
  todo.focus();
  // add edit class
  dispatch(
    editTodo({
      id: todoId,
      text: todo.innerText,
    })
  );
};
    

// hadle todo delete
const handleDeleteTodo = (todoId) => {
  dispatch(deleteTodo(todoId))
}
  return (
    <div>
        {todos.map((todo) => 
        <TodoCard
           key={todo.id}
           todoText={todo.text}
           todoId={todo.id} 
           todoDone={() => handleTodoDone (todo.id)}
           todoDelete={() => handleDeleteTodo (todo.id)}
           todoEdit={() => handleTodoEdit (todo.id) }
        />
        )}
    </div>
  );
};

export default TodoList;