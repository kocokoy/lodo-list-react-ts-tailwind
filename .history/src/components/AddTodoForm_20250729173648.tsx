export default function AddTodoForm() {
  return(
    <form className="flex">
      <input type="text" 
        placeholder="What needs to be done?"
        className="rounded-s-md grow border-gray-400 p-2"
      />
    </form>
  )
}