import * as React from 'react';
import './HeroImage.scss';
import {WeddingSection} from "./components/WeddingSection";
const imageSource = require('./images/heroImage.png');

export const HeroImage = () => (
  <WeddingSection>
    <div className="hero-image" style={{backgroundImage: `url(${imageSource}`}}>
      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Charles' and Harriet's wedding
          </h1>
        </div>
      </div>
    </div>
  </WeddingSection>
);