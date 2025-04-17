// src/Components/MenuSection.js
import React, { useRef } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MenuSection.css';

const menuItems = [
  {
    name: 'Milkshakes',
    rating: 4.8,
    price: '70-120',
    images: ['/menu-img2-2.png'],
  },
  {
    name: 'Special Ice Creams',
    rating: 4.5,
    price: '90-170',
    images: ['/menu-img3.png'],
  },
  {
    name: 'Combo Meals',
    rating: 4.6,
    price: '150-230',
    images: ['/menu-img4.png'],
  },
  {
    name: 'Dosas',
    rating: 4.7,
    price: '55-165',
    images: ['/menu-img5.png'],
  },
  {
    name: 'South Indian Dishes',
    rating: 4.6,
    price: '20-80',
    images: ['/menu-img6.png'],
  },
  {
    name: 'Short Eats',
    rating: 4.9,
    price: '50-100',
    images: ['/menu-img7.png'],
  },
  {
    name: 'Sandwitches',
    rating: 4.6,
    price: '95-180',
    images: ['/menu-img8.png'],
  },
];

const MenuSection = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="menu-section">
      {/* Header */}
      <div className="menu-header">
        <h2 className="menu-title">Our Menu</h2>
        <Link to="/menu" className="see-all-btn">See All &gt;</Link>
      </div>

      {/* Scrollable Cards */}
      <div className="slider-container">
        <button className="slider-btn left" onClick={() => scroll('left')}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="card-slider" ref={scrollRef}>
          {menuItems.map((item, index) => (
            <div className="slider-card-wrapper" key={index}>
              <Card className="menu-card h-100">
                <div className="image-wrapper">
                  <img src={item.images[0]} className="card-img-top" alt={item.name} />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between pt-2 pb-2">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h5 className="mb-0">{item.name}</h5>
                    <div className="text-warning d-flex align-items-center">
                      <FaStar style={{ marginRight: '4px' }} />
                      <small>{item.rating}</small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-1">
                    <span className="menu-price">₹{item.price}</span>
                    <Link to="/menu">
                      <Button variant="outline-primary" size="sm">Order Now</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={() => scroll('right')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
