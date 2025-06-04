import * as React from 'react';
import './app.css';

const App: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <h1>Numpad</h1>
      <div>see README for instructions</div>
      <br />
      <div>{"{insert numpad here}"}</div>
    </>
  );
};

export default App;
