import React, { Component } from 'react';
import './GalleryList.css';

class GalleryList extends Component {

  render() {
    return (
      <div className="display-container">
           {
               this.props.gallery.map(picture => 
                    <div key={picture.id} className="gridItem">

                      <div className="imageArea">
                        <img src={picture.path} alt=""/>
                        <div className="overlay">
                          <div className="desc">
                            <p>{picture.description}</p>
                          </div>
                        </div>
                      </div>
                      
                        <br/>
                        <button onClick={this.props.putLike(picture.id)}>Love It!</button>
                        <button onClick={this.props.deletePhoto(picture.id)}>Remove!</button>
                        <p>{picture.likes} people love this!</p>

                    </div>
               )
           }
      </div>
    );
  }
}

export default GalleryList;