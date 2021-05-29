import React from 'react';
import './App.css';
import { HashRouter,Route,Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Spring1 from './components/spring1';
import Footer from './components/footer';
import Cards from './components/cards';
import Cards2 from './components/cards2';
import Spring3 from './components/spring3';
import Form1 from './components/form';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Projects';
import Programing_skills from './components/Programing_skills';
import Skills from './components/Skills';
import End from './components/End';



function App() {
  
    return(
    <div className="app">
      {/* <NavBar/>
      <Spring1/>
      <Cards/>
      <Cards2/>
      <Spring3/>
      
      <Footer/> */}
      {/* <Form1/> */}
      <HashRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/education" component={Education}/>
        <Route exact path="/project" component={Project}/>
        <Route exact path="/Programing_skills" component={Programing_skills}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/end" component={End}/>
        </Switch>
      </HashRouter>
      
    </div>

    )
  
}


export default App;
