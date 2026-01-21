import { useState } from "react"

function App() {
  const [show, setShow] = useState(false)

  function handleClick() {
    setShow(!show)
  }

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={handleClick}>
        Click me
      </button>

      {show && <p>Hello Urooj 👋</p>}
    </div>
  )
}

export default App
