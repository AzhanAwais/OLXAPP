import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Navbar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component{
    render(){
        return(
            <div class="container-fluid container-2">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span><i class="fa fa-bars" aria-hidden="true"></i></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ALL CATEGORIES
                        </a>
                        <div class="dropdown-menu menu-large" aria-labelledby="navbarDropdown">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Vehicles</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Animals</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Fashion & Beauty</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Services</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Mobiles</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Furniture & Home Decor</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Property for Rent</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Books, Sports & Hobbies</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Business, Industrial & Agriculture</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Jobs</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Kids</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
    
                                <div class="col-lg-3 col-md-6 mb-3">
                                    <h5>Bikes</h5>
                                    <ul class="">
                                        <li class=""><a href="">Tractors and Trailer</a></li>
                                        <li class=""><a href="">Boats</a></li>
                                        <li class=""><a href="">Other Vehicles</a></li>
                                        <li class=""><a href="">Rikshaw & Chinchi</a></li>
                                        <li class=""><a href="">Buses, Vans & Trucks</a></li>
                                        <li class=""><a href="">Spare Parts</a></li>
                                        <li class=""><a href="">Car Assecories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Mobile Phones</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Cars</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Motorcycles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Houses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TV-Video-Audio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tablets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Land & Plots</a>
                    </li>
                  </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;