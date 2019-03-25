import React, { Component, Fragment } from 'react'

export default class Searchitem extends Component {
    render() {
        return (
            <Fragment>
                <li>
                    {this.props.suggestion.name}
                </li>
            </Fragment>
        )
    }
}
