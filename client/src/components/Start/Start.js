import React, { Fragment, Component } from 'react'

import { Link } from 'react-router-dom'

import styles from './start.module.css'

class Start extends Component {
   render(){
       return(
        <Fragment>
            <div className={`${styles.Start} container-fluid` }>
                
            </div>
              <div className={styles.Starttext}>
                  <h1>TODO-APP</h1>
                  <p>Always Stay on TIme</p>
                  <button type="button" className={`btn btn-link`}><Link to="/add">Add Task</Link></button>
              {" "}
              {" "}
                  <button type="button" className={`btn btn-link`}><Link to="/tasks">My Tasks</Link></button>
              </div>

        </Fragment>
       );
   }
}



export default Start