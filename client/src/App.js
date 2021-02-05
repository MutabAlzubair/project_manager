import './App.css';
import { Router } from '@reach/router';
import { useState } from 'react';
import './App.css';
import Login from './views/Login';
import Register from './views/Register';
import LoginPage from './views/LoginPage'
import Home from './components/Home';
import NewProject from "./components/NewProject";

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
       <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title" style ={{fontSize: "50px"}} >
              Project Manager
            </h1>
          </div>
        </div>
        </section>
        <Router>
          <LoginPage path="/" setUser={setUser}/>
          <Home path = "/home"/>
          <NewProject path ="/projects/new" />
          <Register path="/register" setUser={setUser} />
          <Login path="/" setUser={setUser}  />
        </Router>
    </div>
  )
}

export default App;