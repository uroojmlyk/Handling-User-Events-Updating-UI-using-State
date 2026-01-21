import { useState } from "react"

function App() {
  const [message, setMessage] = useState("")

  function handleClick() {
    setMessage("Button clicked! 🎉")
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <button onClick={handleClick}>
        Click me
      </button>

      <p>{message}</p>
    </div>
  )
}

export default App
