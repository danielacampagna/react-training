import React, {Component} from 'react';
import { Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';
import { string, number } from 'prop-types';

class NewProduct extends Component {

    state = {
        name: string,
        description: string,
        stock: number,
        sellPrice: number
    }

    handleInputChange = (event, index) => {
        let value = this.state;
        value[index] = event.target.value;
        this.setState(value);
    };

    handleSaveButton = () => {
         var url = 'http://localhost:55500/AddProduct';
         var data = { product: this.state };

         fetch(url, {
             method: 'POST', // or 'PUT'
             body: JSON.stringify(data), // data can be `string` or {object}!
             headers: {
                 'Content-Type': 'application/json'
             }
         }).then(res => res.json())
             .catch(error => console.error('Error:', error))
             .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>Nuevo Producto</strong>
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label htmlFor="name">Nombre</Label>
                                    <Input type="text" id="name" placeholder="" onChange={(event) => this.handleInputChange(event, "name")} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="description">Descripción</Label>
                                    <Input type="text" id="description" placeholder="" onChange={(event) => this.handleInputChange(event, "description")} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="stock">Stock</Label>
                                    <Input type="text" id="stock" placeholder="" onChange={(event) => this.handleInputChange(event, "stock")} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="sellPrice">Precio de Venta</Label>
                                    <Input type="text" id="sellPrice" placeholder="" onChange={(event) => this.handleInputChange(event, "sellPrice")} />
                                </FormGroup>
                                <div className="form-actions">
                                    <Button type="submit" color="primary" onClick={() => this.handleSaveButton()}>Guardar</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NewProduct;