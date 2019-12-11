import React, { useRef, useEffect } from 'react'

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef()
  useEffect(() => {
    if(typeof duration !== "number" || typeof delay !== "number") {
      return
    }
    if (element.current) {
      const { current } = element
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1;
    }
  })
  return { ref: element, style: { opacity: 0 } }
}

const Example = () => {
  const fadeInH3 = useFadeIn(2, 1)
  const fadeInP = useFadeIn(5, 19)

  return (
    <div>
      <h1>Hello Hook useFadeIn</h1>
      <h3 {...fadeInH3}>HHello</h3>
      <p {...fadeInP}>lorem ipsum</p>
    </div>
  )
}

export default Example
