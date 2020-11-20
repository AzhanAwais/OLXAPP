import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../Styles/SubFooter.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SubFooter extends Component{
    render(){
        return(
            <div className="col-12 col-lg-3 mb-3">
                <h5>{this.props.heading}</h5>
                <ul>
                    <li>{this.props.item1}</li>
                    <li>{this.props.item2}</li>
                    <li>{this.props.item3}</li>
                    <li>{this.props.item4}</li>
                </ul>
            </div>  
        )
    }
}

export default SubFooter;