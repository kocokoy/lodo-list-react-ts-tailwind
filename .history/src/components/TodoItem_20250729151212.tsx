import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({todo}: TodoItemProps){
  return(
    <div>
      <label>
        <input 
        type="checkbox"
        className="scale-125"
        />
        <span>
          {todo.title}
        </span>
      </label>
    </div>
  )
}