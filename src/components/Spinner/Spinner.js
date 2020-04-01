import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = () => (
  <Box>
    <Loader></Loader>
  </Box>
);

export default Spinner;

const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
`;

const Load = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255,255,255, 0.2);
  border-right: 1.1em solid rgba(255,255,255, 0.2);
  border-bottom: 1.1em solid rgba(255,255,255, 0.2);
  border-left: 1.1em solid white;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${Load} 1.1s infinite linear;
  animation: ${Load} 1.1s infinite linear;

&:after{
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
`;