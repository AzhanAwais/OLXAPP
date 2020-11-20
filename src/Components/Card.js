import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Card.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class Card extends Component{
    render(){
        return(
        <div className="col-lg-3 col-md-6 col-12 mb-3">
            <div className="my-card">
                <div className="my-card-header">
                    <span className="feature text-center"><h5>FEATURED</h5></span>
                    <span><FavoriteBorderIcon /></span>
                </div>

                <div className="div-img text-center">
                    <img src={this.props.img} alt="" />
                </div>

                <div className="border-div">
                    <div className="my-card-discription">
                        <h5 className="price">{this.props.name}</h5>
                        <h5 className="discript">{this.props.disc}</h5>
                    </div>

                    <div className="my-card-footer">
                        <span><h5>{this.props.date}</h5></span>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default Card;
