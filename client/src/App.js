import React, { Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar';
import Start from './components/Start/Start';
import Form from './components/form/form';
import Card from './components/card/card';





class App extends Component {
  state = {
    list:[],
    done:[],
    show:'',
    start: true
    
  }
   
  render() {
    return(
      <Fragment>
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Start}/>
              <Route exact path="/add" component={Form} />
              <Route exact path="/tasks" component={Card}/>
            </Switch>
      </Fragment>
    );
  }


}

export default App;
