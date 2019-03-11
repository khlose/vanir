import React, { Component } from 'react'
import './Itemlist.css'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Itementry from './Itementry';

export default class Itemlist extends Component {
    render() {
        return (
            <ListGroup>
                <Itementry></Itementry>
                <Itementry></Itementry>
                <Itementry></Itementry>
                <Itementry></Itementry>
                <Itementry></Itementry>
            </ListGroup>
        )
    }
}
