import React from 'react'

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return
  }

  if (onCancel && typeof onCancel !== "function") {
    return
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm()
    } else {
      onCancel()
    }
  }

  return confirmAction
}
const Example = () => {
  const deleteWorld = () => console.log("Deleting the world")
  const abort = () => console.log("abort")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)
  return (
    <div>
      <h1>Hello Hook useConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}

export default Example