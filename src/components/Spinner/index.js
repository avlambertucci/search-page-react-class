import React from 'react';
import Loader from 'react-loader-spinner'
import {SpinnerContainer} from './style'

function Spinner() {
  return (

    <SpinnerContainer>
      <Loader type="Audio" color="#41d348" height={80} width={80} />
    </SpinnerContainer>
    
  );
}

export default Spinner;