import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class GalleryButton extends Component {

  render() {
    return (
        <div>
            <Button variant="contained" color="primary"
            onClick={this.props.putLike(this.props.picture.id)}>Love It!</Button>
            <Button variant="contained" color="secondary"
            onClick={this.props.deletePhoto(this.props.picture.id)}>Remove!</Button>
            <p>{this.props.picture.likes} people love this!</p>
        </div>
    );
  }
}

export default GalleryButton;