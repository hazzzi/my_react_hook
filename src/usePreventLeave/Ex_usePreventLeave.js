import React from 'react'

const usePreventleave = () => {
  const listener = (event) => {
    event.preventDefault()
    event.returnValue = ""
  }

  const enablePrevent = () => window.addEventListener("beforeunload", listener)
  const disablePrevent = () => window.removeEventListener("beforeunload", listener)

  return { enablePrevent, disablePrevent }
}

const Example = () => {
  const { enablePrevent, disablePrevent } = usePreventleave()
  return (
    <div>
      <h1>Hello Hook usePreventLeave</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  )
}

export default Example