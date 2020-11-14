import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../Styles/SubFooter.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

class SubFooter extends Component{
    render(){
        return(
            <div class="container-fluid container-9">
                <div class="container pt-4">
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <h5>POPULAR CATEGORIES</h5>
                            <ul>
                                <li>Cars</li>
                                <li>Flats for rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>
                            </ul>
                        </div>
        
                        <div class="col-md-3 mb-3">
                            <h5>TRENDING SEARCHES</h5>
                            <ul>
                                <li>Bikes</li>
                                <li>Watches for rent</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </div>
        
                        <div class="col-md-2 mb-3">
                            <h5>ABOUT US</h5>
                            <ul>
                                <li>About OLX Group</li>
                                <li>OLX Blog</li>
                                <li>Contact Us</li>
                                <li>OLX for Businesses</li>
                            </ul>
                        </div>
        
                        <div class="col-md-2 mb-3">
                            <h5>OLX</h5>
                            <ul>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal & Privacy Information</li>
                            </ul>
                        </div>
        
                        <div class="col-md-2 mb-3">
                            <h5>FOLLOW US</h5>
                            <span>
                                <a href=""><FacebookIcon className="icons" /></a>
                                <a href=""><TwitterIcon className="icons" /></a>
                                <a href=""><PlayArrowIcon className="icons" /></a>
                                <a href=""><InstagramIcon className="icons" /></a>
                            </span>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default SubFooter;