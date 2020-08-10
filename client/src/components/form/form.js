import React, { Component, Fragment } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Datetime from 'react-datetime';
// import styles from './form.module.css'

import "bootstrap/dist/css/bootstrap.min.css";
// import serializeForm from 'form-serialize';

class Forms extends Component {

    state = {
       error:false,
       date: null
    }

// changeMe = (show) => {
//     this.setState({
//         change:show
//     })
// }

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
//             lists:resData.lists
//         });
        
//     }).catch(err => {
//         console.log(err);
//     })
// }

// addList = (event) => {
    
//     const value = serializeForm(event.target, {hash:true})

//     fetch('http://localhost:8080/about',{
//         method:'POST',
        
//         headers: {
//           'Accept' : 'application/json',
//           'Content-type': 'application/json'
//         },
//         body:JSON.stringify({
//             list:value
//         })
//     })
//             .then(res =>{
//                 return res.json();
//                // this.props.onLogin(value)
//             })
//             .then(resData => {
//                 console.log(resData);
//             })
//             .catch(err => {
//                 console.log(err);
//             })

    
// }
// componentDidMount() {

// }
// changeHandler = (event) => {
//     this.setState(prevState => {
//         let x = [...prevState.list].push(event.target.value);
        
//         return list;
//     })
// }

submitHandler = (e) => {
    e.preventDefault();

    const content = e.target.text.value;

    const dateTime = this.state.date;
    
    if(!content){
        this.setState({error:true})
        return
    }

    fetch('http://localhost:8080/about',{
                method:'POST',
                
                headers: {
                  'Accept' : 'application/json',
                  'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    list:content,
                    date:dateTime
                
                })
            })
            .then(res =>{
                alert('Added');
                this.setState({error:false});
            })
            .catch(err =>{
                this.setState({error:true});
            })

}

handleChange = (date) => {
    console.log(date);
    this.setState({date: date._d});
}
     

    render(){
        var yesterday = Datetime.moment().subtract( 1, 'day' );
        var valid = function( current ){
            return current.isAfter( yesterday );
        };
        return (
            <Fragment>
               
                <div className="container" style={{padding:50}}>
                {this.state.error&&(
                    <div>
                        ERROR
                    </div>
                    )}
                   <Form onSubmit={this.submitHandler}>
                       <FormGroup>
                           <Label for="text">
                              <h4>Work To Do</h4> 
                           </Label>
                               <Input
                               type="textarea" 
                               name="text" 
                               id="text"/>
                       </FormGroup>
                       <br/>
                       
                       <h5>Optional Entry</h5>
                       <div>_______</div>
                       <br/>
                       
                            <Datetime isValidDate={ valid } onChange={this.handleChange}/>
                {/* // )}           <FormGroup>
                //                 <Label for="datetime-local">Datetime</Label>
                //                 <Input
                //                 type="datetime"
                //                 name="datetime"
                //                 id="datetime"
                //                 placeholder="datetime placeholder"
                //                 />
                //             </FormGroup>
                //        <FormGroup>
                //            <Label>
                //            <h4>Time</h4> 
                //            </Label>
                //                <Input
                //                type="time"
                //                name="time"
                //                id="time"
                //                placeholder="Time"/>
                //        </FormGroup>
                //        <FormGroup>
                //            <Label>
                //            <h4>Date</h4> 
                //            </Label>
                //                <Input
                //                 type="date"
                //                 name="date"
                //                 id="date"
                //                 placeholder="Date"/>
                //        </FormGroup> */}
                       <Button type="submit" color="success">Submit</Button>
                   </Form>
                </div>
            </Fragment>

         );
             
           
    } 
}
export default Forms