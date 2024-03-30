import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('');

  useEffect(()=>{
    const timerId = setTimeout(() => {
        if(name !== ''){
        console.log('Name is: ', name);
      }

    }, 1000)

    return () => {
      clearTimeout(timerId);
    }

  },[name])

  function updateName(e){
    setName(e.target.value)
  }

  return (
    <>
    <div><input type="text" onChange={updateName} placeholder='Name' /></div>
    <br />
    <div>hello, {name}</div>
        
    </>
  )
}

export default App
