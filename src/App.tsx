import React from 'react'
// import { Logo } from './Assets/Logo'
import 'antd/dist/antd.css'
import './App.css'
import background from './Assets/computer.jpg'
import profile from './Assets/profile.jpg'
import Avatar from 'antd/lib/avatar/avatar'

function App() {
  return (
    <div className="App">
      <div
        className="App-banner"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}
      >
        <Avatar size={200} src={profile} />
      </div>
      <header className="App-body">
        <h2 className="App-name">François van der Merwe</h2>
        <p>
          lets see what we can do together. Im a software developer with skills in everything from ReactJs, Node to
          Swift and Objective C
        </p>
      </header>
      <header className="App-header"></header>
    </div>
  )
}

export default App
