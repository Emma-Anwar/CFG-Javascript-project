import React from 'react';
import Button from '../Button';

function Home() {
  return (
    <div>
      <h2>Welcome to CFG Tea</h2>
      <p>Discover the world of tea with CFG Tea</p>
      <Button buttonStyle='btn--primary' buttonSize='btn--large'>
        Sign up now
      </Button>
    </div>
  );
}

export default Home;
