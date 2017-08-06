import * as React from "react";
import './ErrorText.scss';

type ErrorTextProps = {
  children?: any,
};

export const ErrorText = ({ children }: ErrorTextProps) =>
  <div className="ErrorText">
    {children}
  </div>;
