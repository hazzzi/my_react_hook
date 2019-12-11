import React, { useState, useEffect } from 'react'

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  })

  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX })
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return state
}

const Example = () => {
  const { y } = useScroll()
  return (
    <div style={{ height: "1000vh" }}>
      <h1>Hello Hook useScroll</h1>
      <h2 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Scroll</h2>
    </div>
  )
}

export default Example