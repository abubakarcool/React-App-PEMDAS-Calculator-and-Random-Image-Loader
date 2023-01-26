import './App.css';
import Navbar from './navbar';
import Calculator from './calculator';
import React,{useState} from 'react';
import ImgAPI from './ImgAPI';
import Footer from './footer';

function App() {
  const [togg, settogg] = useState("calc");
  const toggleMe=(val)=>{
    if(val=='calc'){
      settogg('calc');
    }
    else{
      settogg('API')
    }
    
  }
  if(togg=='calc'){
    return (
      <>
        <Navbar toggleMe = {toggleMe} />
        <Calculator />
        <Footer />
      </>
    );
  }
  else{
    return (
      <>
        <Navbar toggleMe = {toggleMe} />
        <ImgAPI />
        <Footer />
      </>
    );
  }
  
}

export default App;
