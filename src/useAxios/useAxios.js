import React, { useState, useEffect, useRef } from 'react'
import defaultAxios from 'axios'

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  })

  const [trigger, setTrigger]  = useState(0)

  const refetch = () =>{
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now())
  }

  useEffect(() => {
    if (!opts.url) {
      return
    }
    axiosInstance(opts).then(data => {
      setState({
        ...state,
        loading: false,
        data
      })
    }).catch(error => {
      setState({...state, loading: false, error})
    })
  }, [axiosInstance, opts, state, trigger])
  return {...state, refetch}
}

const Example = () => {
  const { loading, data, error, refetch } = useAxios({ url: "https://yts-proxy.now.sh/list_movies.json" })
  // console.log(`Loading: ${loading} 
  // Error:${error}
  // Data: ${JSON.stringify(data)}`)
  return (
    <div>
      <h1>Hello Hook useAxios</h1>
      <h2>{loading && "Loading"}</h2>
      <h2>{data && data.status}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
}

export default Example