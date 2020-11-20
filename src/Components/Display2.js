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
                <div className="container container-7">
                    <div className="row text-center">
                        <div className="col-12">
                            <a href="#">Load more</a>
                        </div>
                    </div>

                    <div className="row my-5 text-center">
                        <img src={img9} alt="" />
                    </div>
                </div>

                <div className="container-fluid container-8">
                    <div className="row ">
                        <img src={img10} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Display2;
