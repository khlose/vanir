import React, { Component } from 'react'
import './Itemlist.css'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Itementry from './Itementry';

export default class Itemlist extends Component {
    render() {
        return (
            <ListGroup>
                <Itementry itemName="Emperium" 
                itemImageUrl="https://static.poporing.life/items/emperium.png"
                itemPrice="25,000z"
                itemVolume="111,111ea"
                />
                
                <Itementry itemName="Emperium" 
                itemImageUrl="https://static.poporing.life/items/emperium.png"
                itemPrice="25,000z"
                itemVolume="111,111ea"
                />

                <Itementry itemName="Emperium" 
                itemImageUrl="https://static.poporing.life/items/emperium.png"
                itemPrice="25,000z"
                itemVolume="111,111ea"
                />

                <Itementry itemName="Emperium" 
                itemImageUrl="https://static.poporing.life/items/emperium.png"
                itemPrice="25,000z"
                itemVolume="111,111ea"
                />

                <Itementry itemName="Emperium" 
                itemImageUrl="https://static.poporing.life/items/emperium.png"
                itemPrice="25,000z"
                itemVolume="111,111ea"
                />


            </ListGroup>
        )
    }
}
