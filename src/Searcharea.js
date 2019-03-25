import React, { Component, Fragment } from 'react'
import Searchbar from './Searchbar';
import axios from 'axios';

export default class componentName extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        axios.get('https://api.poporing.life/get_item_list').then(result => {
            const items = result.data.data.item_list;
            // console.log(result);
            // console.log(result.data);
            // console.log(result.data.data.item_list);
            console.log(items);
            this.setState({ items });
        })
    }


    render() {
        return (
            <Fragment>
                <Searchbar suggestions={this.state.items} />
            </Fragment>
        )
    }
}
