import React, { Component } from 'react'
import './Topbar.css'
import { Container, Row, Col, Button } from 'reactstrap';

export default class Topbar extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>Blank</Col>
                    <Col>Logo</Col>
                    <Col> Dropdown</Col>
                </Row>
            </Container>
        )
    }
}
