import * as React from 'react';
import {WeddingSection} from "./components/WeddingSection";
import {SectionTitle} from "./components/SectionTitle";
import './Rsvp.scss';

export const Rsvp = () => (
  <div className="Rsvp">
    <WeddingSection>
      <SectionTitle title="RSVP"/>
      Pls reply
    </WeddingSection>
  </div>
);