import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({todo}: TodoItemProps){
  return(
    <div>
      <label className="flex items-center">
        <input 
        type="checkbox"
        className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  )
}