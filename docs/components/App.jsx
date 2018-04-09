import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

import { Alert, Button } from '../../lib';
import avatarExample from './examples/Alert.example.txt';

const exampleScope = {
  React,
  Alert,
};

const App = () => (
  <div>
    <Alert />
    <Button />
    <LiveProvider scope={exampleScope} code={avatarExample}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </div>
);

export default App;
