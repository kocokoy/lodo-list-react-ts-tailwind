import { dummyData } from "./data/todos"

function App() {
  return (
   <main className="py-10 bg-red-50 h-screen">
     <h1 className="font-bold text-3xl text-center">
       <div>
        <div>
          {dummyData.map(todo => (
            <div key={todo.id} className="bg-white p-4 rounded shadow mb-2">
              <h2 className="text-xl">{todo.title}</h2>
              <p className={`text-sm ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
                {todo.completed ? 'Completed' : 'Not Completed'}
              </p>
            </div>
          ))}
        </div>
       </div>
     </h1>
    </main>
  )
}

export default App
