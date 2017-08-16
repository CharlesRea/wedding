import * as React from 'react';
import {ReactNode} from "react";
import Login from "./Login";
import * as jwtDecode from "jwt-decode";
import {AccessTokenPayload, getRole, UserDetails} from "../models/authentication";
import * as moment from 'moment';

type Props = {
  children?: ReactNode,
  onAuthentication: (user: UserDetails) => void,
}
type State = {
  user: UserDetails | null,
}

const accessTokenStorageKey = "WeddingAuthentication";

export class RequiresAuthentication extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { user: null }
  }

  private accessTokenExpiryTimerId: number | null;

  onObtainAccessToken = (accessToken: string) => {
    const payload = jwtDecode<AccessTokenPayload>(accessToken);
    sessionStorage.setItem(accessTokenStorageKey, accessToken);
    const userDetails = {
      accessToken,
      expiryTime: payload.exp,
      role: getRole(payload),
    };
    this.setState({ user: userDetails });

    const millisecondsTillExpiry = moment.unix(payload.exp).diff(moment());
    if (this.accessTokenExpiryTimerId) {
      clearTimeout(this.accessTokenExpiryTimerId);
    }
    this.accessTokenExpiryTimerId = window.setTimeout(this.onAccessTokenExpiry, millisecondsTillExpiry - 1000);
    this.props.onAuthentication(userDetails);
  };

  onAccessTokenExpiry = () => {
    this.setState({ user: null })
  };

  componentWillMount() {
    const accessToken = sessionStorage.getItem(accessTokenStorageKey);
    if (accessToken) {
      this.onObtainAccessToken(accessToken);
    }
  }

  componentWillUnmount() {
    if (this.accessTokenExpiryTimerId) {
      clearInterval(this.accessTokenExpiryTimerId);
    }
  }

  render() {
    if (this.state.user != null) {
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