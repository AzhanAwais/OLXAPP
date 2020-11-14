import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Footer.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component{
    render(){
        return(
            <div class="container-fluid container-10">
                <div class="row">
                    <div class="col-12">
                        <div class="div-title">
                            <h5><span class="country">Other Countries </span> India - South Africa - Indonesia</h5>
                            <h5><span class="country">Free Classifieds in Pakistan </span> © 2006-2020 OLX</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;