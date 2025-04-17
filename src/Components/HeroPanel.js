// src/Components/HeroPanel.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroPanel.css'; // for custom styles

const HeroPanel = () => {
  return (
    <div className="carousel-container">
      <Carousel fade interval={3000} controls pause="hover">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/hero-img1.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/hero-img2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default HeroPanel;
