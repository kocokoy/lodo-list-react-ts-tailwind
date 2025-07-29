import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem(props: TodoItemProps){
  return(
    <div>
      TodoItem
    </div>
  )
}