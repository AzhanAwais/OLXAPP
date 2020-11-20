import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Navbar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component{
    render(){
        return(
            <div className="container-fluid container-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span><FontAwesomeIcon icon={faBars} /></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown active">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ALL CATEGORIES
                        </a>
                        <div className="dropdown-menu menu-large" aria-labelledby="navbarDropdown">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Vehicles</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Animals</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Fashion & Beauty</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Services</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Mobiles</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Furniture & Home Decor</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Property for Rent</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Books, Sports & Hobbies</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Business, Industrial & Agriculture</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Jobs</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Kids</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <h5>Bikes</h5>
                                    <ul className="">
                                        <li className=""><a href="">Tractors and Trailer</a></li>
                                        <li className=""><a href="">Boats</a></li>
                                        <li className=""><a href="">Other Vehicles</a></li>
                                        <li className=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li className=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li className=""><a href="">Spare Parts</a></li>
                                        <li className=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Mobile Phones</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Cars</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Motorcycles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Houses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">TV-Video-Audio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tablets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Land & Plots</a>
                    </li>
                  </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;
