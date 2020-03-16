import React, { Component } from 'react';
import { CardBody, Row, CardHeader, Col, Card, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class ProductList extends Component {
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

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col sm="12" xl="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Listado de Productos</strong>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12">
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Nombre</th>
                                                    <th>Descripción</th>
                                                    <th>Stock</th>
                                                    <th>Precio</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.products.map (
                                                        product => {
                                                            return (
                                                                <tr key={product.Id}>
                                                                    <td>{product.Name}</td>
                                                                    <td>{product.Description}</td>
                                                                    <td>{product.Stock}</td>
                                                                    <td>$ {product.SellPrice}</td>
                                                                </tr>
                                                            )
                                                        }
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                        <Pagination>
                                            <PaginationItem>
                                                <PaginationLink previous tag="button"></PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem active>
                                                <PaginationLink tag="button">1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink tag="button">2</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink tag="button">3</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink tag="button">4</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink next tag="button"></PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductList;