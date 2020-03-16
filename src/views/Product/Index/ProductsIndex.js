import React, { Component } from 'react';
import { Card, CardBody, Row, Col, CardHeader, CardFooter, Button, CardImg } from 'reactstrap';

class ProductIndex extends Component {
    state = {
        products: []
    }

    componentDidMount = () => {
        fetch('http://localhost:55500/GetProducts')
            .then(function (response) {
                return response.json();
            })
            .then(result => {
                let state = this.state;
                state.products = result;
                this.setState(state);
            });
    };

    goToReview(productId) {
        this.props.history.push({
            pathname: '/product-review',
            state: { detail: productId }
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    {
                        this.state.products.map(product => {
                            return (
                                <Col xs="12" sm="6" md="4" key={product.Id}>
                                    <Card>
                                        <CardHeader>
                                            {product.Name}
                                        </CardHeader>
                                        <CardBody>
                                            <CardImg top width="100%" src={product.Image} />
                                        </CardBody>
                                        <CardFooter>
                                            <Col col="5" sm="5" md="5" className="mb-0 mb-xl-0">
                                                <Button block color="info" className="btn-pill"
                                                    onClick={() => this.goToReview(product.Id)}>Ver más</Button>
                                            </Col>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default ProductIndex;