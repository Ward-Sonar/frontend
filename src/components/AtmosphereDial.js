import React, { Component } from 'react';
import API from '../api';

// Import Material UI components
import Box from '@material-ui/core/Box';

// Import illustrations
import { ReactComponent as DialHand } from '../assets/dial-hand.svg';
import { ReactComponent as BgNonSelected } from '../assets/dial-non-selected.svg';

const rotations = [
  {
    atmosphere: -2,
    rotation: '-90deg',
  },{
    atmosphere: -1,
    rotation: '-45deg',
  },{
    atmosphere: 0,
    rotation: '0deg',
  },{
    atmosphere: 1,
    rotation: '45deg',
  },{
    atmosphere: 2,
    rotation: '90deg',
  }
]

class AtmosphereDial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atmosphere: -2,
      rotation: '0deg',
    };
  }

  componentDidMount() {
    this.setRotation();
    this.getAtmosphere();

    const refreshAtmosphere = setInterval(() => {
      this.getAtmosphere();
    }, 60000);
    return () => clearInterval(refreshAtmosphere);
  }

  getAtmosphere() {
    API.get(`/atmosphere/${process.env.REACT_APP_URL_KEY}`)
    .then((res) => {
      this.setState({
        atmosphere: res.data.data.attributes.atmosphere,
      }, () => {
        this.setRotation();
      });
      this.props.setRefreshTime(res.data.data.attributes.datetime);
    });
  }

  setRotation() {
    let rotation = rotations.find(item => item.atmosphere === this.state.atmosphere);
    this.setState({
      rotation: rotation.rotation,
    });
  }

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
          transform: `translateX(-50%) rotate(${this.state.rotation})`,
          transformOrigin: '22px 182px',
          transition: 'transform 2s ease-in-out',
          width: 42,
        }}/>
      </Box>
    );
  }
}

export default AtmosphereDial;