import React, { Component } from 'react';

class GalleryItem extends Component {

  render() {
    return (
        <div className="imageArea">
            <img src={this.props.picture.path} alt=""/>
            <div className="overlay">
                <div className="desc">
                    <p>{this.props.picture.description}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default GalleryItem;