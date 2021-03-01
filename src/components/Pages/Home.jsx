import React from 'react';
import Header from '../shared/Header';
import Intructions from '../shared/Instructions';

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Header title="Home Sweet Home"/>
      </div>
      <Intructions/>
    </>
  );
}
 
export default Home;