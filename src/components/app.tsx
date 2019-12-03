import React from 'react';

interface AppProps {
  compiler: string;
  framework: string;
}

const App = (props: AppProps) => {
  return (
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
  );
};

export default App;
