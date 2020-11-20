import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Navbar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class NavList extends Component{
    render(){
        return(
            <div className="col-lg-3 col-md-6 mb-3">
                <h5>{this.props.heading}</h5>
                <ul className="">
                    <li className=""><a href="">{this.props.item1}</a></li>
                    <li className=""><a href="">{this.props.item2}</a></li>
                    <li className=""><a href="">{this.props.item3}</a></li>
                    <li className=""><a href="">{this.props.item4}</a></li>
                    <li className=""><a href="">{this.props.item5}</a></li>
                    <li className=""><a href="">{this.props.item6}</a></li>
                    <li className=""><a href="">{this.props.item7}</a></li>
                </ul>
            </div>
        )
    }
}

export default NavList; 