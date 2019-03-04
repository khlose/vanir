import React, { Component } from 'react'
import './Topbar.css'
import Dropdown from 'react-bootstrap/Dropdown'
import {Container,Row, Col} from 'react-bootstrap'

export default class Topbar extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    //Some useless shit
                    </Col>
                    <Col>
                    //Logo goes here
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Region
                         </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">SEA</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Global</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

            </Container>
        )
    }
}
