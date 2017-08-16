import * as React from "react";
import './ContentBox.scss';

export type ContentBoxProps = {
  title: string,
  children?: React.ReactNode,
}

export const ContentBox = (props: ContentBoxProps) => (
  <div className="ContentBox">
    <div className="header">
      <h3>{props.title}</h3>
    </div>
    <div className="body">
      {props.children}
    </div>
  </div>
);

export default ContentBox;