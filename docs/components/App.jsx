import React from 'react';
// import {
//   LiveProvider,
//   LiveEditor,
//   LiveError,
//   LivePreview,
// } from 'react-live';

import { Button } from '../../lib';
// import avatarExample from './examples/Alert.example.txt';

// const exampleScope = {
//   React,
//   Alert,
// };

const buttonTypes = ['Primary', 'Success', 'Danger', 'Warning', 'Info'];

const App = () => (
  <div>
    {/* <Alert /> */}
    {buttonTypes.map(type => <Button key={type} type={type.toLowerCase()}>{type}</Button>)}
    {/* <LiveProvider scope={exampleScope} code={avatarExample}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider> */}
  </div>
);

export default App;
