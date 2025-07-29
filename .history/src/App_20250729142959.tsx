import { dummyData } from "./data/todos"

function App() {
  return (
   <main className="py-10 bg-red-50 h-screen">
     <h1 className="font-bold text-3xl text-center">
       <div>
        <div>
          {dummyData.map(todo => (
            <p>
              {todo.title}
            </p>
          ))}
        </div>
       </div>
     </h1>
    </main>
  )
}

export default App
