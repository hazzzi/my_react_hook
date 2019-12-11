import React, { useState, useEffect } from 'react'

const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title")
    htmlTitle.innerText = title
  }
  useEffect(updateTitle, [title])
  return setTitle
}
const Example = () => {
  const titleUpdater = useTitle("Loading...")
  setTimeout(() => titleUpdater("Home"), 5000)
  return (
    <div>
      <h1>Hello Hook useTitle</h1>
    </div>
  )
}

export default Example