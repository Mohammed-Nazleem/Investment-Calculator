import React from 'react'
import imgLogo from '../assets/investment-calculator-logo.png';

export default function Header(){
  return (
    <header id='header'>
        <img src={imgLogo} alt="Logo showing a money bag" />
       <h1>React Investment Calculator</h1>
    </header>
  )
}

