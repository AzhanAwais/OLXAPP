import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Footer.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component{
    render(){
        return(
            <div className="container-fluid container-10">
                <div className="row">
                    <div className="col-12">
                        <div className="div-title">
                            <h5><span className="country">Other Countries </span> India - South Africa - Indonesia</h5>
                            <h5><span className="country">Free classifieds in Pakistan </span> © 2006-2020 OLX</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
