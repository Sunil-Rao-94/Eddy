// import logo from './logo.svg';
import React,{useState} from 'react';
// import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

   const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#035547';
      //to change cursor style
      document.body.style.cursor = "move";
      //set Alert message
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Text Utils is Awesome";
      // }, 3000);

      // setInterval(() => {
      //   document.title = "Install Text Utils Now!!!";
      // }, 1000);
    }
  
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.cursor = "default ";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Utils";
    }
   } 
  
  return (
    <>
      {/* <Router> */}
      <Navbar title = "Save Soil" mode = {mode} toggleMode = {toggleMode}  aboutText="Inner-Enginnering"/>      
      <Alert alert={alert}/>
      <div className="container center my-3 ">
      <TextForm showAlert={showAlert} heading = "Kindly say something about soil" mode={mode}/>
      {/* <Routes> */}
        {/* We are using exact path because exact file name will be matched, else it will consider partial matching and render anything matching:
        example : 
        /About - renders Text Component
        /About/Images - renders Image Component
        now if "exact path" is not used, even if we call /About/Images, it renders Text COmponent in About*/}
        {/* <Route exact path="/about" element={<About/>} /> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Kindly say something about soil" mode={mode}/>}/> */}
      {/* </Routes> */}
       
      </div>
      {/* </Router> */}
      {/* <Navbar/> */}
   </>
  );
}


export default App;