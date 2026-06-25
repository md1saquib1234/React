import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/header'
import DisplayCounter from "./components/DisplayCounter"
import Container from "./components/Container"
import Controls from "./components/Controls"
import { useSelector } from "react-redux"
import PrivacyMessage from "./components/PrivacyMessage"

function App() {

  const privacy = useSelector(store => store.privacy);
  

  return (
  
      
      <center className="col-lg-6 mx-auto text-center mt-5">
        <Container>
       <Header></Header> 
        {privacy ? 
        <PrivacyMessage/> :
       <DisplayCounter></DisplayCounter>}
        <Controls></Controls>
        </Container>
      </center>
      
    
     
          

      
    
  )
}

export default App
