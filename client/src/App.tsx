import * as React from 'react';
import 'antd/dist/antd.css';
import {Wedding} from "./screens/Wedding";
import {RequiresAuthentication} from "./screens/RequiresAuthentication";

const App = () => (
  <div>
    <RequiresAuthentication >
      <Wedding />
    </RequiresAuthentication>
  </div>
);

export default App;
