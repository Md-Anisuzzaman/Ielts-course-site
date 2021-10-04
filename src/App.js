import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/home';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <div className="App">

      {/* use-react-router */}

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home> </Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
