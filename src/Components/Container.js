import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Container.css';
import '../Styles/Card.css';
import Card from './Card';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';


var cardlist=[
    {
        id:1,
        name:"Cooling Pad",
        disc:"T8 Aluminum Laptop Table Stand....",
        date:"OCT 22",
        img:img5
    },
    {
        id:"2",
        name:"Cooling Pad",
        disc:"Cooling pad at cheap price.....",
        date:"AUG 13",
        img:img6
    },
    {
        id:"3",
        name:"Cooling Pad",
        disc:"Cooling pad laptop with double fan...",
        date:"JUN 18",
        img:img7
    },
    {
        id:"4",
        name:"Cooling Pad",
        disc:"Adjustable Aluminum T8 Laptop.....",
        date:"SEP 29",
        img:img8
    }
];

const cardListReturn=cardlist.map((cards, i) => {
    return(
        <Card name={cardlist[i].name}
            disc={cardlist[i].disc}
            date={cardlist[i].date}
            img={cardlist[i].img}/>
    )
});


class Container extends Component{
    render(){
        return(
            <div class="container container-5">
                <div class="row">
                    <div class="col-12">
                        <div class="title">
                            <h4>{this.props.title}</h4>
                        </div>
                    </div>
                </div>

                <div class="row my-3">
                  {cardListReturn}
                </div>
            </div>
        )
    }
}

export default Container;