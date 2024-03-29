import React from 'react';
import Education from './education';
import DiamondCounter from './diamond';

function Home(props: any) {
  return (
    <React.Fragment>
      <DiamondCounter />
      <Education />
    </React.Fragment>
  );
}

export default Home;
