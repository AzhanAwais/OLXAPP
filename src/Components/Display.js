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
                <div class="container-fluid container-3">
                    <div class="row">
                        <div class="col-12">
                            <img src={img11} alt="" />
                        </div>
                    </div>
                </div>

                <div class="container container-4">
                    <div class="row text-center">
                        <div class="col-12">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display;