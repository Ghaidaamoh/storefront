import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap'
import * as actions from "../store/cart";


const Status = props => {

    return (
        <Row>
            {console.log(props.categoryState.dataa)}
            {props.categoryState.dataa.products.map((data, index) => {
                if (data.category === props.categoryState.dataa.activeCategory)
                    return (
                        <Col key={index} className="cardMinu" sm={4}>
                            <Card style={{ borderRadius: "5%",marginLeft:'100px', marginTop: '50px', display: 'inline-block', width: '300px', border: '2px solid grey', marginBottom: '50px' }} >
                                <div className="col-12  col-lg-3 " >

                                    <Card.Img style={{ width: '150px', height: '150px', marginLeft: "100px", marginTop: "12px" }} variant="top" src={`${data.image}`} />
                                    <Card.Body style={{ width: "300px" }} >
                                        <Card.Title>Product Name : {data.name} </Card.Title>
                                        <Card.Text>
                                            Price : {data.price}
                                        </Card.Text>
                                        <Card.Text>
                                            In Stock : {data.inStock}
                                        </Card.Text>
                                        <Button variant="dark" color="primary" onClick={() => props.addItem(data)}> Add to Cart</Button>
                                        &nbsp;
                                        <Button variant="dark" color="primary" >View Details</Button>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    )
            }
            )}
        </Row>
    )
}


const mapStateToProps = state => ({
    categoryState: state
});

const mapDispatchToProps = (dispatch, getState) => ({
    addItem: (addItemFromCard) => dispatch(actions.updateCardData(addItemFromCard)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Status);