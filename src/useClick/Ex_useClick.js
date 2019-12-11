import React, { useRef, useEffect } from 'react'

const useClick = (onclick) => {
  const element = useRef()
  useEffect(() => {
    if(typeof onclick !== "function") return
    
    if (element.current) {
      element.current.addEventListener("click", onclick)
    }
    
    return () => { // useEffect에서 리턴 -> componentWillUnMount
      if (element.current) {
        element.current.removeEventListener("click", onclick)
      }
    }
  }, [onclick])
  return element
}

const Example = () => {
  // const potato = useRef()
  // setTimeout(() => potato.current.focus(), 5000)

  const sayHello = () => console.log("say hello")
  const title = useClick(sayHello)

  return (
    <div>
      <h1>Hello Hook useClick</h1>
      <h2 ref={title}>Hi</h2>
      {/* <input ref={potato} placeholder="la" /> */}
    </div>
  )
}

export default Example