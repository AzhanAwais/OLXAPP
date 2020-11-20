import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../Styles/SubFooter.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SubFooterLink from './SubFooterLink';

class SubFooter extends Component{
    render(){
        return(
            <div className="container-fluid container-9">
                <div className="container pt-4">
                    <div className="row">
                        <SubFooterLink heading="POPULAR CATEGORIES" item1="Cars" item2="Flats for rent" item3="Jobs" item4="Mobile Phones" />
                        <SubFooterLink heading="TRENDING SEARCHES" item1="Bikes" item2="Watches for rent" item3="Books" item4="Dogs" />
                        <SubFooterLink heading="ABOUT US" item1="About OLX Group" item2="OLX Blog" item3="Contact Us" item4="OLX for Businesses" />

                        <div className="col-md-2 mb-3">
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
