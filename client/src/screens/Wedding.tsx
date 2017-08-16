import * as React from "react";
import { Menu, Icon } from 'antd';
import {HeroImage} from "./wedding/HeroImage";
import {WhenAndWhere} from "./wedding/WhereAndWhen";
import Rsvp from "./wedding/Rsvp";
import {UserDetails} from "../models/authentication";
import Waypoint = require("react-waypoint");
import './Wedding.scss';

type ScreenType = 'HeroImage' | 'WhenAndWhere' | 'RSVP';

type WeddingProps = { user: UserDetails }
type State = {
  screenInView: ScreenType,
}

export class Wedding extends React.Component<WeddingProps, State> {
  constructor(props: WeddingProps, context: any) {
    super(props, context);
    this.state = { screenInView: 'HeroImage' };
  }

  onScrollIntoView = (type: ScreenType) => () => {
    this.setState({ screenInView: type})
  };

  render() {
    return (
      <div className="Wedding">
        <Menu className="menu" mode="horizontal" selectedKeys={this.state.screenInView ? [ this.state.screenInView ]: []} >
          <Menu.Item key="WhenAndWhere">
            <a href="#WhenAndWhere"><Icon type="info-circle-o"/>Wedding Information</a>
          </Menu.Item>
          <Menu.Item key="RSVP">
            <a href="#Rsvp"><Icon type="mail"/>RSVP</a>
          </Menu.Item>
        </Menu>
        <Waypoint topOffset="40%" bottomOffset="40%" onEnter={this.onScrollIntoView('HeroImage')}>
          <div>
            <HeroImage />
          </div>
        </Waypoint>
        <Waypoint topOffset="30%" bottomOffset="30%" onEnter={this.onScrollIntoView('WhenAndWhere')}>
          <div>
            <WhenAndWhere user={this.props.user} />
          </div>
        </Waypoint>
        <Waypoint topOffset="30%" bottomOffset="30%" onEnter={this.onScrollIntoView('RSVP')}>
          <div>
            <Rsvp user={this.props.user} />
          </div>
        </Waypoint>
      </div>
    );
  }
}

export default Wedding;