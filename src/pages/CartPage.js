import React from 'react';
import { useCart } from '../Context/CartContext';
import NavbarComp from '../Components/NavbarComp';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CartPage = () => {
  const { cart, updateQuantity, totalCost } = useCart();

  return (
    <div>
      <NavbarComp />
      <Container className="my-4">
        <h2 className="mb-4">Your Cart</h2>

        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <Row className="g-4">
              {Object.values(cart).map((item) => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Card className="h-100">
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', padding: '10px' }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title className="text-center">{item.name}</Card.Title>
                        <Card.Text className="text-center fw-bold">
                          ₹{item.price} × {item.quantity}
                        </Card.Text>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                        <Button
                          variant="outline-danger"
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                        >
                          –
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline-success"
                          onClick={() => updateQuantity(item, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="text-end mt-4">
              <h5>Total: ₹{totalCost}</h5>
              <Button variant="success" className="mt-2 px-4">
                Place Order
              </Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
