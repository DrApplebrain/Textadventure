import { useState } from 'react'
import Header from './Components/Header'
import Container from './Components/Container'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='header'>
      <h1>Welcome to the Gate</h1>
      </div>
      <div className='container'>
      </div>
      <div className='footer'>
      </div>
    </>
  )
}

export default App;



/*------------------------------------------------Nicht löschen--------------------------------
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Welcome to the Gate</h1>
      <div>
       
       
      </div>
      
    </>
  )
}

export default App
----------------------------------------------------------------------------------------------*/