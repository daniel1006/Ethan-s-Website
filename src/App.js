import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import WrittenWork from './pages/WrittenWork';
import BehindScenes from './pages/BehindScenes';
import ThankYou from './pages/ThankYou';

import NavBar from './components/NavBar';
import Footer from './components/Footer';


class App extends React.Component {
 
  render() {
  return (
    <div>
   <Router>
            
      <Switch>
        <Route path="/" exact component={Home}> <NavBar/> <Home/> <Footer/> </Route>
        <Route path="/films" component={Films}> <Films/> </Route>
        <Route path="/writtenwork" component={WrittenWork}> <WrittenWork/> </Route>
        <Route path="/behindscenes" component={BehindScenes}> <BehindScenes/> </Route>
        <Route path="/thankyou" component={ThankYou}> <ThankYou/> </Route>
      </Switch>

    </Router>
    </div>
  );
}}

export default App;
