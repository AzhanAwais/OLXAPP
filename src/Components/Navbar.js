import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Navbar.css';
import NavList from './NavList';
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
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
    
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
    
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
    
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
    
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
       
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
        
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />

                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
      
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
       
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
        
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
    
                                <NavList heading="Vehicle" item1="Tractors and Trailer" item2="Boats" item3="Other Vehicles" item4="Rikshaw & Chinchi" 
                                    item5="Buses, Vans & Trucks" item6="Spare Parts" item7="Car Assecories"
                                />
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
