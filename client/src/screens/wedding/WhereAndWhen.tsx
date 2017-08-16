import * as React from 'react';
import {WeddingSection} from "./components/WeddingSection";
import {SectionTitle} from "./components/SectionTitle";
import './WhereAndWhen.scss';

export const WhenAndWhere = () => (
  <div className="WhereAndWhen" id="WhenAndWhere">
    <WeddingSection>
      <SectionTitle title="When and where"/>
        Old Down, 11th November, 2pm?
    </WeddingSection>
  </div>
);