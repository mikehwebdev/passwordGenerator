import { useState } from 'react';
import './App.css'

function App() {

  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];
  
  const [password1, setPassword1] = useState('Password 1')
  const [password2, setPassword2] = useState('Password 2')

  function passwordGenerator(){
    let p1 = ''
    let p2 = ''
    for (let i=0; i < 15; i++){
      const random = Math.floor(Math.random() * characters.length)
      const random2 = Math.floor(Math.random() * characters.length)
      p1 += characters[random]
      p2 += characters[random2]
    }
    setPassword1(p1)
    setPassword2(p2)
  }
  
  

  return (
    <div className="app">
      <h1>Generate a <span><br />random password</span></h1>
      <p> Never use an insecure password again</p>
      <button onClick={passwordGenerator}>Generate passwords</button>
      <div className="flex-container">
        <div className="output">{password1}</div>
        <div className="output">{password2}</div>
      </div>
    </div>
  )
}

export default App
