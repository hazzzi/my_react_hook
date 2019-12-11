import React, { useState, useEffect, useRef } from 'react'

const useFullScreen = (callback) => {
  const element = useRef()

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen()
      if (callback && typeof callback === "function") {
        callback(true)
      }
    }
  }
  const exitFull = () => {
    document.exitFullscreen()
    if (callback && typeof callback === "function") {
      callback(true)
    }
  }
  return { element, triggerFull, exitFull }
}

const Example = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small")
  }
  const { element, triggerFull, exitFull } = useFullScreen(onFullS)
  return (
    <div>
      <h1>Hello Hook useFullScreen</h1>
      <div ref={element}>
        <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" width="100%" alt="dog" />
        <button onClick={exitFull}>Exit fullScreen</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  )
}

export default Example