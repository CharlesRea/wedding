import * as React from 'react';
import {ReactNode} from "react";
import Login from "./Login";

type Props = {
  children?: ReactNode,
}
type State = {
  accessToken: string | null,
}

export class RequiresAuthentication extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { accessToken: null }
  }

  isAuthenticated = () => this.state.accessToken != null;

  onObtainAccessToken = (accessToken: string) => {
    this.setState({accessToken})
  };

  render() {
    if (this.isAuthenticated()) {
      return (
        <div className="RequiresAuthentication">
          {this.props.children}
        </div>
      );
    }

    return (
      <div className="RequiresAuthentication">
        <Login onObtainAccessToken={this.onObtainAccessToken} />
      </div>
    );
  }
}