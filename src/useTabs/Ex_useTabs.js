import React, { useState } from 'react'

const content = [
  {
    tab: "Section 1",
    content: "Section 1 내용 입니다."
  },
  {
    tab: "Section 2",
    content: "Section 2 내용 입니다."
  },
]


const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab)

  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}
const Example = () => {
  const { currentItem, changeItem } = useTabs(0, content)
  return (
    <div>
      <h1>Hello Hook useTabs</h1>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>
        {currentItem.content}
      </div>
    </div>
  )
}

export default Example