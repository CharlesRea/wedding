import * as React from 'react';
import './HeroImage.scss';
import {WeddingSection} from "./components/WeddingSection";
const imageSource = require('./images/heroImage.jpg');

export const HeroImage = () => (
  <WeddingSection>
    <div className="hero-image">
      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Charles and Harriet
          </h1>
          <h2>
            11th November 2017
          </h2>
          <h2>
            Old Down Manor, Bristol
          </h2>
        </div>
      </div>
    </div>
  </WeddingSection>
);