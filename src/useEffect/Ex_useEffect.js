import React, { useState, useEffect } from 'react'

const Example = () => {
  const sayHello = () => console.log("hello")

  const [number, setNumber] = useState(0)
  const [aNumber, setAnumber] = useState(0)

  // useEffect(sayHello) // componentDidMount
  // useEffect(sayHello, [number]) // componentWillUpdate
  useEffect(sayHello, []) // 한번만 실행한다.

  return (
    <div>
      <h1>Hello Hook useEffect</h1>
      <button onClick={() => { setNumber(number + 1) }}>{number}</button>
      <button onClick={() => { setAnumber(aNumber + 1) }}>{aNumber}</button>
    </div>
  )
}

export default Example