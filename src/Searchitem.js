import React, { Component, Fragment } from 'react';
import { ListGroupItem, Row, Col, Container } from 'reactstrap';
import './Searchitem.css';

export default class Searchitem extends Component {
    render() {
        return (
            <Fragment>
                <ListGroupItem className="borderless-item">
                    <Container>
                        <Row >
                            <Col xs={{ size: 1, offset: 0 }}>
                                <img src={"https://static.poporing.life/items/" + this.props.suggestion.image_url}
                                    onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/25X25?text=?"}}
                                    
                                    alt=""
                                    className="search-thumb">
                                </img>
                            </Col>
                            <Col xs={{ size: 9 }}>
                                {this.props.suggestion.display_name}
                            </Col>
                            <Col xs={1}>
                                Button
                            </Col>

                        </Row>

                    </Container>
                </ListGroupItem>
            </Fragment>
        )
    }
}
