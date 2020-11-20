import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Display.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img11 from '../Images/img11.PNG';
import img4 from '../Images/img4.PNG';

class Display extends Component{
    render(){
        return(
            <div>
                <div className="container-fluid container-3">
                    <div className="row">
                        <img src={img11} className="img-responsive" alt="" />
                    </div>
                </div>

                <div className="container container-4">
                    <div className="row text-center">
                        <img src={img4} className="img-responsive" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Display;
