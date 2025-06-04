import * as React from 'react';
import './app.css';

const App: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <h1>Numpad</h1>
      <p className="readthedocs">
        <a
          href="https://docs.google.com/document/d/1OUY8TTDjzB3kirsWaewfKb9Ee7RYLd5AoI_QQ8-YhQw/edit"
          target="_blank"
        >
          See requirements
        </a>
      </p>
    </>
  );
};

export default App;
