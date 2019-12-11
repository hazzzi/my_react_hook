import React, { useEffect } from 'react'

const useBeforeLeave = (onBefore) => {

  useEffect(() => {
    const handle = (event) => {
      const { clientY } = event
      if (clientY <= 0) {
        onBefore()
      }
    }
    document.addEventListener("mouseleave", handle)
    return () => document.removeEventListener("mouseleave")
  }, [onBefore])

  if (typeof onBefore !== "function") {
    return
  }
}

const Example = () => {
  const begForLife = () => console.log("Pls don leave")
  useBeforeLeave(begForLife)
  return (
    <div>
      <h1>Hello Hook useBeforeLeave</h1>
    </div>
  )
}

export default Example