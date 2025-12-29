import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-4 text-center">
      
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img 
            src={viteLogo} 
            className="w-24 h-24 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img 
            src={reactLogo} 
            className="w-24 h-24 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all duration-300 animate-[spin_20s_linear_infinite]" 
            alt="React logo" 
          />
        </a>
      </div>

      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>

      <div className="p-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-gray-900 border border-transparent rounded-lg px-6 py-3 font-medium hover:border-blue-500 transition-colors cursor-pointer"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="bg-gray-700 rounded px-1">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-500 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App