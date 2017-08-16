import * as React from 'react';
import 'antd/dist/antd.css';
import {Wedding} from "./screens/Wedding";
import {RequiresAuthentication} from "./screens/RequiresAuthentication";
import {UserDetails} from "./models/authentication";

type State = { user: UserDetails | null };

class App extends React.Component<{}, State> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      user: null,
    };
  }

  onLogin = (user: UserDetails) => this.setState({ user });

  render() {
    return (
      <div>
        <RequiresAuthentication onAuthentication={this.onLogin}>
          {this.state.user && <Wedding user={this.state.user}/>}
        </RequiresAuthentication>
      </div>
    )
  }
}

export default App;
