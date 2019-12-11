import React, { useState } from "react"

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue)
  const onChange = event => { // 다른 function에서 이벤트를 처리 할 수 있다.
    const {
      target: { value }
    } = event
    let willUpdate = true
    if (typeof validator === "function") {
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    }
  }
  return { value, onChange }
}

const Example = () => {
  // const maxLen = (value) => value.length <= 10
  const maxLen = (value) => !value.includes("@")
  const name = useInput("Mr.", maxLen)
  return (
    <div>
      <h1>Hello Hook useInput</h1>
      <input placeholder="Name" {...name} />
      {/* {...name} === value = {name.value} onChange = {name.onChange} */}
    </div>
  )
}

export default Example