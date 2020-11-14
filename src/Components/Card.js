import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Card.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';

class Card extends Component{
    render(){
        return(
        <div class="col-lg-3 col-md-6 col-12 mb-3">
            <div class="my-card">
                <div class="my-card-header">
                    <span class="feature text-center"><h5>FEATURED</h5></span>
                    <span><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                </div>

                <div class="div-img text-center">
                    <img src={this.props.img} alt="" />
                </div>

                <div class="border-div">
                    <div class="my-card-discription">
                        <h5 class="price">{this.props.name}</h5>
                        <h5 class="discript">{this.props.disc}</h5>
                    </div>

                    <div class="my-card-footer">
                        <span><h5>{this.props.date}</h5></span>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default Card;