import React, { Component } from 'react';

// Import Material UI components
import Box from '@material-ui/core/Box';

// Import illustrations
import { ReactComponent as DialHand } from '../assets/dial-hand.svg';
import { ReactComponent as BgNonSelected } from '../assets/dial-non-selected.svg';

class AtmosphereDial extends Component {
  render() {
    return (
      <Box
        style={{            
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}>
        <BgNonSelected />
        <DialHand style={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%) rotate(0deg)',
          transformOrigin: '22px 182px',
          transition: 'transform 2s ease-in-out',
          width: 42,
        }}/>
      </Box>
    );
  }
}

export default AtmosphereDial;