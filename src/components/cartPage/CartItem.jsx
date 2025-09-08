import { Row, Col, Card, Button, InputGroup } from 'react-bootstrap';
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = ({ item, onQuantityChange, onRemove }) => {

    return (
        <div className=''>
            <Card className="CartCardSection mb-1 rounded-lg border-0">
                <div className='CartCard'>
                    <Card.Body className='py-0'>
                        <Row className="align-items-center my-3">
                            <Col xs={12} md={6} className="order-2 order-md-1">
                                <div className='CartCardSectiontemplate'>
                                    <div className='CartCardSectiontemplateImg'><img src="https://placehold.co/60x60/f8f9fa/dee2e6?text=Product" alt="Medicine" className="rounded-lg" /></div>
                                    <div className='CartCardSectiontemplateTxt'>
                                        <h5 style={{ color: "#00254E" }} className="mb-0 fw-bold">{item.name}</h5>
                                        <small className="text-muted">{item.description}</small>
                                        <p className="mb-0 text-muted">{item.details}</p>

                                        <div className='CartCardQuantity mt-3'>
                                            <InputGroup style={{ width: "150px", justifyContent: "space-between" }}>
                                                <Button
                                                    variant="outline-secondary"
                                                    onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <RiSubtractLine />
                                                </Button>

                                                <span>{item.quantity}</span>

                                                <Button
                                                    variant="outline-secondary"
                                                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                                                >
                                                    <MdAdd />
                                                </Button>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} md={6} className="CartRemoveBtn order-1 order-md-2" >
                                <div className='CartRemoveBtnIcon'>
                                    <Button
                                        variant="link"
                                        className="me-3 mb-3"
                                        onClick={() => onRemove(item.id)}
                                        aria-label="Remove item"
                                    >
                                        <MdDeleteOutline size={28} />
                                    </Button>

                                    <h4 className="mb-0 fw-bold">₹ {(item.price * item.quantity).toFixed(2)}</h4>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default CartItem;
