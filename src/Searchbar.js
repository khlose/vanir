import React, { Component } from 'react'
import './Searchbar.css'
import { InputGroup, InputGroupAddon, Input} from 'reactstrap';


export default class Searchbar extends Component {
    render() {
        return (
            <div>
                <InputGroup >
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input className="search-box" placeholder="Search..."></Input>
                </InputGroup>
            </div>
        )
    }
}
