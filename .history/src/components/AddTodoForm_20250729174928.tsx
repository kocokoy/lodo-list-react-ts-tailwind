import { useState } from "react"

interface addTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: addTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
  }
  return(
    <form className="flex" onSubmit={handleSubmit}>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text" 
        placeholder="What needs to be done?"
        className="rounded-s-md grow border-gray-400 p-2"
      />
      <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
        Add
      </button>
    </form>
  )
}