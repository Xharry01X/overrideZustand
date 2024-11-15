import { useState } from 'react'

import './App.css'
import UserManagement from './component/UserManagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserManagement/>
    </>
  )
}

export default App
