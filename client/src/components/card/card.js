import React, { Component, Fragment } from 'react';
import Notime from './notime/notime';
import Time from './time/time'
// import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './card.css'



class Cards extends Component {
    state= {
        
        done: [],
        show: 'ls',
        loading:true
    }
    // componentDidMount() {
    //     fetch('http://localhost:8080/details',{
    //         //mode: 'no-cors',
    //         headers:{
                
    //             'Content-type' : 'application/json'
    //         }
    //     }).then(res => {
    //         return res.json();
    //     })
    //     .then(resData => {
    //         this.setState({
    //             loading:false,
    //             list:resData.lists
    //         });
            
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    // deleteTk = (item) => {
    //     this.setState({
    //         done: [...this.state.done, item.content],
    //         list: this.props.values.lists.filter(i => {
    //             return i._id !== item._id;
    //         })
    //     })
    //     fetch('http://localhost:8080/about/'+ item._id, {
    //         method: 'DELETE'

    //     })
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(resData => {
    //         console.log(resData);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
 render(){
         return(
             <Fragment>
                 <div className="container">

               <div className = "row">
                  <div className="col-12 col-md-6">
                       <Notime/>
                  </div>
                  <div className="col-12 col-md-6">
                       <Time/>
                  </div>
               </div>
                 </div>
             </Fragment>
         );
 }
} 

export default Cards;
