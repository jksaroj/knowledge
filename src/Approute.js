import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';

        class Approute extends Component {
        render() {
        return(
<Router>
    <div>
        <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Login">Login</Link>
                </li>
            </ul>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/Login" component={Login}/>
       
    </div>
</Router>

                );
        }


        }
        export default Approute;

