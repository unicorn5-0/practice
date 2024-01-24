import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClick = () => {
    setClicks({ ...clicks, right: clicks.right })
  }

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
  }


  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
    </div>
  )
}

export default App;