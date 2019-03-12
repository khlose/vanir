import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Container, Row, Col,Button } from 'reactstrap';
import './Itementry.css';

class Itementry extends Component {
    render() {
        return (
            <div>
                <ListGroupItem className="borderless-item">
                    <Container>
                        <Col xs="2">
                            Image
                        </Col>
                        <Col xs="8">
                            <Row>
                                Title
                            </Row>
                            <Row>
                                Price/Vol
                            </Row>
                        </Col>
                        <Col xs="2">
                            <Button/>
                            <Button/>
                        </Col>
                    </Container>
                </ListGroupItem>
            </div>
        );
    }
}

Itementry.propTypes = {

};

export default Itementry;
