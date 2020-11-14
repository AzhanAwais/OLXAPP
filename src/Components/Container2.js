import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Container.css';
import '../Styles/Card.css';
import Card from './Card';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img11 from '../Images/img11.jpg';
import img12 from '../Images/img12.jpg';
import img13 from '../Images/img13.jpg';
import img14 from '../Images/img14.jpg';
import img15 from '../Images/img15.jpg';


var cardlist=[
    {
        id:1,
        name:"Laptop",
        disc:"Hp laptop 250gb ssd and 8gb ram....",
        date:"OCT 22",
        img:img11
    },
    {
        id:"2",
        name:"Bike 70cc",
        disc:"Honda 70cc for sale at cheap price.....",
        date:"AUG 13",
        img:img12
    },
    {
        id:"3",
        name:"Bike 200cc",
        disc:"Honda 200cc for sale at cheap price...",
        date:"JUN 18",
        img:img13
    },
    {
        id:"4",
        name:"Mobile",
        disc:"Techno mobile for sale at low price.....",
        date:"SEP 29",
        img:img14
    },
    {
        id:"5",
        name:"Car",
        disc:"Rent a car for one day at only 5000 Rs.....",
        date:"NOV 24",
        img:img15
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


class Container2 extends Component{
    render(){
        return(
            <div class="container container-6">
                <div class="row">
                    <div class="col-12">
                        <div class="title">
                            <h4>{this.props.title}</h4>
                        </div>
                    </div>
                </div>

                <div class="row my-3">
                  {cardListReturn}
                  {cardListReturn}
                </div>
            </div>
        )
    }
}

export default Container2;