import React, { Component } from 'react';

// Import Material UI
import { Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';

class ToggleButtonCustom extends Component {
  render() {
    return (
      <ToggleButton value={this.props.value} aria-label={this.props.label}>
        <Typography variant="subtitle1">{this.props.label}</Typography>
      </ToggleButton>
    );
  }
}

export default ToggleButtonCustom;