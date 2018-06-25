import React, { Component } from 'react';

class GalleryButton extends Component {

  render() {
    return (
        <div>
            <button onClick={this.props.putLike(this.props.picture.id)}>Love It!</button>
            <button onClick={this.props.deletePhoto(this.props.picture.id)}>Remove!</button>
            <p>{this.props.picture.likes} people love this!</p>
        </div>
    );
  }
}

export default GalleryButton;