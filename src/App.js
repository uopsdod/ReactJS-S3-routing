import React, { Component } from 'react';
import './index.css'
import { Route, Link, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import Users from './users'
import Contacts from './contacts'
import Home from './home'

class MyRouting extends Component {

  constructor(props){
    super(props);
    console.log("this.props.urlpath: ",this.props.urlpath);
  }

  render() {
    const whereToGo = "/" + this.props.urlpath;
    let myRendering;
       myRendering =             
      <Router>
        <div>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>           
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
          {this.props.urlpath &&
            <Redirect to={whereToGo} push />
          }          
        </div>
      </Router>  

		return (
      myRendering
		);
	}	
}

export default MyRouting