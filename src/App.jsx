import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}
    >
      
       <div className="fixed flex flex-wrap justify-center px-7 bottom-12 insert-x-0">
        <div className="flex flex-wrap justify-center gap-5 px-3 py-2 bg-white shadow-lg jusd rounded-3xl">
          
          <button 
          onClick={() => setColor("red")}
          className="px-5 py-2 outline-none rounded-3xl"
          style={{backgroundColor:"red"}}
          >Red</button>
          
          <button 
          onClick={() => setColor("blue")}
          className="px-4 py-1 outline-none rounded-3xl"
          style={{backgroundColor:"blue"}}
          >Blue</button>
          
          <button 
          onClick={() => setColor("yellow")}
          className="px-4 py-1 outline-none rounded-3xl"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          
          <button 
          onClick={() => setColor("green")}
          className="px-4 py-1 outline-none rounded-3xl"
          style={{backgroundColor:"green"}}
          >Green</button>
          
          <button 
          onClick={() => setColor("pink")}
          className="px-4 py-1 outline-none rounded-3xl"
          style={{backgroundColor:"pink"}}
          >Pink</button>

          <button 
          onClick={() => setColor("orange")}
          className="px-4 py-1 outline-none rounded-3xl"
          style={{backgroundColor:"orange"}}
          >Orenge</button>

          <button 
          onClick={() => setColor("white")}
          className="px-4 py-1 border-2 outline-none rounded-3xl "
          style={{backgroundColor:"white"}}
          >White</button>

          <button 
          onClick={() => setColor("black")}
          className="px-4 py-1 text-white outline-none rounded-3xl color"
          style={{backgroundColor:"black"}}
          >Balck</button>

         <button 
          onClick={() => setColor("#0369a1")}
          className="px-4 py-1 text-white outline-none rounded-3xl color"
          style={{backgroundColor:"#0369a1"}}
          >Sky</button>

          <button 
          onClick={() => setColor("#b45309")}
          className="px-4 py-1 text-white outline-none rounded-3xl color"
          style={{backgroundColor:"#b45309"}}
          >Amber</button>

           <button 
          onClick={() => setColor("#84cc16")}
          className="px-4 py-1 text-white outline-none rounded-3xl color"
          style={{backgroundColor:"#84cc16"}}
          >Lime</button>
          <button 
          onClick={() => setColor("#be123c")}
          className="px-4 py-1 text-white outline-none rounded-3xl color"
          style={{backgroundColor:"#be123c"}}
          >Rose</button>
        </div>
      </div> 
    </div>
      
  )
}

export default App
