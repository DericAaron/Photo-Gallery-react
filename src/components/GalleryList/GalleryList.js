import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryButton from '../GalleryButton/GalleryButton';

class GalleryList extends Component {

  render() {
    return (
      <div className="display-container">
        {
          this.props.gallery.map(picture => 
            <div key={picture.id} className="gridItem">
            <GalleryItem picture={picture} />               
            <br/>
            <GalleryButton picture={picture} putLike={this.props.putLike} deletePhoto={this.props.deletePhoto}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default GalleryList;