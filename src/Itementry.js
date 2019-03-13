import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Container, Row, Col, Button } from 'reactstrap';
import './Itementry.css';

class Itementry extends Component {
    render() {
        return (
            <div>
                <ListGroupItem className="borderless-item">
                    <Container>
                        <Row >
                            <Col>
                                <img src="https://dummyimage.com/50x50/000/fff" alt="itemimg">
                                </img>
                            </Col>
                            <Col>
                                <Row>
                                    Price
                                </Row>
                                <Row>
                                    Volume
                                </Row>
                            </Col>
                            <Col>
                                <Button>Unsave
    
                            </Button>
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
