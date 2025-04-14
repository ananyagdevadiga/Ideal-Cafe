import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIceCream,
  faUsers,       // 👥 3 user icon
  faUtensils,    // 🍴 fork and spoon for Products
  faAward,
} from '@fortawesome/free-solid-svg-icons';

const StatsCards = () => {
  const stats = [
    { icon: faIceCream, number: '40+', label: 'Variety of Flavours' },
    { icon: faUsers, number: '4500+', label: 'Dealers' },       // 👥 3-user icon
    { icon: faUtensils, number: '175', label: 'Products' },     // 🍴 icon
    { icon: faAward, number: '27', label: 'Awards' },
  ];

  return (
    <Row
      className="justify-content-center"
      style={{
        marginTop: '80px',
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '40px',
        rowGap: '20px',
      }}
    >
      {stats.map((item, index) => (
        <Col
          key={index}
          style={{
            flex: '0 0 auto',
            maxWidth: '260px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card
            className="text-center shadow-sm border-0"
            style={{
              height: '240px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              style={{
                fontSize: '55px',
                color: '#8b2e87',
                marginBottom: '15px',
              }}
            />
            <h3 className="fw-bold mb-2">{item.number}</h3>
            <p className="mb-0" style={{ fontSize: '16px' }}>
              {item.label}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatsCards;
