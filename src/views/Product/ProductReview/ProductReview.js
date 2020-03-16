import React, { Component } from 'react';
import { Card, CardBody, Nav, NavItem, NavLink, Col, CardHeader, CardImg, NavbarText, Button, Collapse } from 'reactstrap';
import { object } from 'prop-types';

class ProductReview extends Component {
    constructor(props) {
        super(props);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.state = {
            product: object,
            collapse: false,
            accordion: [true, false],
            custom: [true, false],
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
        };
    }

    componentDidMount = () => {
        var url = new URL('http://localhost:55500/GetProduct')
        var params = { id: this.props.location.state.detail }
        url.search = new URLSearchParams(params).toString();

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(result => {
                let state = this.state;
                state.product = result;
                this.setState(state);
            });
    };

    toggleAccordion(tab) {
        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            accordion: state,
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Col xs="12" sm="6" md="4" key={this.state.product.Id}>
                    <Card>
                        <CardHeader>
                            {this.state.product.Name}
                        </CardHeader>
                        <CardBody>
                            <CardImg top width="100%" src={this.state.product.Image} />
                        </CardBody>
                    </Card>
                </Col>
                <Card>
                    <CardBody>
                        <div id="accordion">
                            <Card className="mb-0">
                                <CardHeader id="headingOne">
                                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                                        <h5 className="m-0 p-0">Descripción</h5>
                                    </Button>
                                </CardHeader>
                                <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                                    <CardBody>
                                        {this.state.product.Description}
                                    </CardBody>
                                </Collapse>
                            </Card>
                            <Card className="mb-0">
                                <CardHeader id="headingTwo">
                                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                                        <h5 className="m-0 p-0">Conocé más</h5>
                                    </Button>
                                </CardHeader>
                                <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                                    <CardBody>
                                        Próximamente
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ProductReview;