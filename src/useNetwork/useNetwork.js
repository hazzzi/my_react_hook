import React, { useState, useEffect } from 'react'

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine)
  useEffect(() => {
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine)
      }
      setStatus(navigator.onLine)
    }
    window.addEventListener("online", handleChange)
    window.addEventListener("offline", handleChange)

    return () => {
      window.addEventListener("online", handleChange)
      window.addEventListener("offline", handleChange)
    }
  }, [onChange])
  return status
}

const Example = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we jest went online" : "we are offline")
  }
  const onLine = useNetwork(handleNetworkChange)
  return (
    <div>
      <h1>Hello Hook useNetwork</h1>
      <h3>{onLine ? "Online" : "Offline"}</h3>
    </div>
  )
}

export default Example