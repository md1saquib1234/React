import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from './Components/ClockHeading';
import ClockSlogan from './Components/ClockSlogan';
import CurrentTime from './Components/CurrentTime';

function App() {
  const [count, setCount] = useState(0)

  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
    
      
  
}

export default App
