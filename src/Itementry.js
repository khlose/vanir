import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Container, Row, Col, Button } from 'reactstrap';
import './Itementry.css';

class Itementry extends Component {
    render() {
        //let imgUrl = "https://static.poporing.life/items/" + {prop.itemName} + ".png";
        return (
            <div>
                <ListGroupItem className="borderless-item">
                    <Container>
                        <Row >
                            <Col xs={{ size: 2, offset: 0 }}>
                                <img src={this.props.itemImageUrl} alt={this.props.itemName}>
                                </img>
                            </Col>
                            <Col xs={{ size: 7, offset: 1 }}>
                                <Row>
                                    {this.props.itemName}
                                </Row>
                                <Row>
                                    {this.props.itemPrice} / {this.props.itemVolume}
                                </Row>
                            </Col>
                            <Col xs={{ size: 2, offset: 0 }}>
                                <Button><span class="glyphicon glyphicon-search"></span></Button>
                            </Col>
                        </Row>

                    </Container>
                </ListGroupItem>
            </div>
        );
    }
}

Itementry.propTypes = {

};

export default Itementry;
