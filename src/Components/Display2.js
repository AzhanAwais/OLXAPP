import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Display.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img9 from '../Images/img9.jpg';
import img10 from '../Images/img10.jpg';

class Display2 extends Component{
    render(){
        return(
            <div>
                <div class="container container-7">
                    <div class="row text-center">
                        <div class="col-12">
                            <a href="">Load more</a>
                        </div>
                    </div>

                    <div class="row my-5 text-center">
                        <div class="col-12">
                            <img src={img9} alt="" />
                        </div>
                    </div>
                </div>

                <div class="container-fluid container-8">
                    <div class="row ">
                        <div class="col-12">
                            <img src={img10} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display2;