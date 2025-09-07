import { Row, Col, Card, Button, InputGroup } from 'react-bootstrap';
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = ({ item, onQuantityChange, onRemove }) => {

  return (
    <Card className="CartCardSection my-3 shadow-sm rounded-lg border-0">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={2} md={1}>
            <img src="https://placehold.co/60x60/f8f9fa/dee2e6?text=Product" alt="Medicine" className="rounded-lg" />
          </Col>

          <Col xs={10} md={5}>
            <h5 style={{color:"#00254E"}} className="mb-0 fw-bold">{item.name}</h5>
            <small className="text-muted">{item.description}</small>
            <p className="mb-0 text-muted">{item.details}</p>

            <div className='CartCardQuantity mt-3'>
              <InputGroup style={{ width:"150px", justifyContent:"space-between" }}>
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
          </Col>

          <Col xs={12} md={6} className="text-end">
            <Button
              variant="link"
              className="p-0 me-3"
              onClick={() => onRemove(item.id)}
              aria-label="Remove item"
            >
              <MdDeleteOutline size={28} />
            </Button>

            <h4 className="mb-0 fw-bold">₹ {(item.price * item.quantity).toFixed(2)}</h4>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
