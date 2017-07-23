import * as React from 'react';
import './WeddingSection.scss';

type SectionProps = {
  children?: any,
}

export const WeddingSection = (props: SectionProps) => (
  <div className="WeddingSection">
    {props.children}
  </div>
);
