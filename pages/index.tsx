import React from 'react';
import Education from './education';
import DiamondCounter from './diamond';
import Avatar from './avatar';

function Home(props: any) {
  return (
    <React.Fragment>
      <DiamondCounter />
      <Education />
      <Avatar />
    </React.Fragment>
  );
}

export default Home;
