import React , { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Spinner, Button } from 'reactstrap';

class Time extends Component {
    state = {
        list:[],
        loading:true,
        error:false
      }
      componentDidMount() {
               this.loadItem();
      } 

      loadItem = () => {
        fetch('http://localhost:8080/details',{
             
            headers:{
                
                'Content-type' : 'application/json'
            }
        }).then(res => {
            return res.json();
        })
        .then(resData => {
            console.log(resData)
            this.setState({
                loading:false,
                list:resData.lists,
                error:false
            });
            
        }).catch(err => {
            this.setState({
                loading:false,
                error:true,
            })
        })
      }
      deleteTask = (id) => {
        fetch('http://localhost:8080/about/'+ id, {
                    method: 'DELETE'
        
                })
                .then(res => {
                    return res.json();
                })
                .then(resData => {
                    this.setState({
                        loading:true
                    });
                    this.loadItem();
                })
                .catch(err => {
                    console.log(err);
                })
      }

    render(){ 
        return(
            <Fragment>
               
               {this.state.loading &&(
                   <Spinner style={{ width: '3rem', height: '3rem' }} />
               )}
               {this.state.error&&(
                   <div>
                       Something went wrong... Try refreshing the page
                   </div>
               )}
               {!this.state.loading &&  (
                   <div>

               {(this.state.list.length=== 0&&!this.state.error) && (
                   <div>YOu're Free!! Or <Link to="/add">Add More Tasks</Link>

                   </div>
               )}
               {this.state.list.length!==0 && (
                   <div>
             <h1>Upcoming</h1>
                <div className="card" style={{width: 380, margin:20}}>
                    <ul className="list-group list-group-flush">
                         {this.state.list.map(item => {
                             return <li key={item._id} className="list-group-item" style={{textAlign:"center"}}>
                                 <span style={{fontWeight:"bolder"}}>{item.content}</span> By time:  <span style={{fontWeight:"bolder"}}>{item.date}</span>
                                 <Button onClick={() => this.deleteTask(item._id)}>Done</Button>
                             </li>
                         })}
                    </ul>
                </div>
                   </div>
                    
               )}
                   </div>
               )}
            </Fragment>
        );
    }
}

export default Time;