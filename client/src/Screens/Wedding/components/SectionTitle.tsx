import * as React from 'react';

type SectionTitleProps = {
  title: string,
}

export const SectionTitle = (props: SectionTitleProps) => (
  <div className="SectionTitle">
    <h1 className="title">{props.title}</h1>
  </div>
);
