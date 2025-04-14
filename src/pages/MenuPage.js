import React, { useState } from 'react';
import NavbarComp from '../Components/NavbarComp';
import MainFooter from '../Components/MainFooter';
import FooterContent from '../Components/FooterContent';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './MenuPage.css';
import { useCart } from '../Context/CartContext'; // ✅ Correct hook import

const comboProducts = [
  {
    id: 1,
    name: 'South Indian Combo',
    price: 150,
    image: '/img-14.jpg',
  },
  {
    id: 2,
    name: 'Chineese Combo',
    price: 160,
    image: '/img-19.jpeg',
  },
  {
    id: 3,
    name: 'North Indian Combo',
    price: 170,
    image: '/img-north.jpg',
  },
  {
    id: 4,
    name: 'Sandwich Combo',
    price: 90,
    image: '/img-21.jpg',
  },
  {
    id: 5,
    name: 'Machine Gun & Black Current Shake Combo',
    price: 110,
    image: '/img-22.jpg',
  },
];

const specialIceCreams = [
  {
    id: 6,
    name: 'Choco Chip',
    price: 90,
    image: '/img-1.jpg',
  },
  {
    id: 7,
    name: 'Kesar Falooda',
    price: 95,
    image: '/falooda.jpg',
  },
  {
    id: 8,
    name: 'Senorita',
    price: 120,
    image: '/img-2.jpg',
  },
  {
    id: 9,
    name: 'Sandy Nuts',
    price: 120,
    image: '/img-3.jpg',
  },
  {
    id: 10,
    name: 'Tiramisu',
    price: 170,
    image: '/img-10.jpg',
  },
  {
    id: 11,
    name: 'Jackpot',
    price: 150,
    image: '/img-9.jpg',
  },
  {
    id: 12,
    name: 'Chocolate Choconut',
    price: 125,
    image: '/img-4.jpg',
  },
  {
    id: 13,
    name: 'Choco Lava',
    price: 130,
    image: '/img-5.jpg',
  },
  {
    id: 14,
    name: 'Banana Split',
    price: 130,
    image: '/img-6.jpg',
  },
  {
    id: 15,
    name: 'Dilkush',
    price: 130,
    image: '/img-7.jpg',
  },
  {
    id: 16,
    name: 'Chocolate Dad',
    price: 130,
    image: '/img-8.jpg',
  },
  {
    id: 17,
    name: 'Tropical Damaka',
    price: 130,
    image: '/img-11.jpg',
  },
  {
    id: 18,
    name: 'Parfait',
    price: 130,
    image: '/img-12.jpg',
  },
  {
    id: 19,
    name: 'Gudbud',
    price: 150,
    image: '/gudbud.png',
  },
];

const MenuPage = () => {
  const [localCart, setLocalCart] = useState({});
  const { updateQuantity } = useCart(); // ✅ Using useCart hook from context

  const handleUpdate = (productId, quantity, product) => {
    setLocalCart((prev) => {
      const updated = { ...prev };
      if (quantity <= 0) {
        delete updated[productId];
      } else {
        updated[productId] = quantity;
      }
      return updated;
    });

    // Update global cart as well
    updateQuantity(product, quantity);
  };

  const renderProductCard = (product) => (
    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Card className="h-100">
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              padding: '10px',
            }}
          />
        </div>
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="text-center">{product.name}</Card.Title>
            <Card.Text className="text-center fw-bold">
              ₹{product.price}
            </Card.Text>
          </div>
          {localCart[product.id] ? (
            <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
              <Button
                variant="outline-danger"
                onClick={() =>
                  handleUpdate(product.id, localCart[product.id] - 1, product)
                }
              >
                –
              </Button>
              <span>{localCart[product.id]}</span>
              <Button
                variant="outline-success"
                onClick={() =>
                  handleUpdate(product.id, localCart[product.id] + 1, product)
                }
              >
                +
              </Button>
            </div>
          ) : (
            <Button
              variant="primary"
              className="w-100 mt-3"
              onClick={() => handleUpdate(product.id, 1, product)}
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <div>
      <NavbarComp />
      <Container className="my-4">
        <h1 className="mb-4 text-black text-start fs-1">Combo Meals</h1>
        <Row className="g-4 mb-5">{comboProducts.map(renderProductCard)}</Row>

        <h1 className="mb-4 text-black text-start fs-1">Special Ice Creams</h1>
        <Row className="g-4">{specialIceCreams.map(renderProductCard)}</Row>
      </Container>
      
      <MainFooter />
      <FooterContent />
    </div>
    
  );
};

export default MenuPage;
