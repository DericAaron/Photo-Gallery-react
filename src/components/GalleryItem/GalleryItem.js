import React, { Component } from 'react';

class GalleryItem extends Component {
    constructor(props){
        super(props);
        //set the state for description
        this.state = {showDesc: false}
    }

    toggleDescription = (event) => {
        this.setState( 
            {
                showDesc: !this.state.showDesc
            }
        );
    } //end toggle desc

  render() {
    return (
        <div className="imageArea" onClick={this.toggleDescription} >
            <img src={this.props.picture.path} alt="" />
            {this.state.showDesc && <div className="overlay">
                <div className="desc">
                    <p>{this.props.picture.description}</p>
                </div>
            </div>}
        </div>
    );
  }
}

export default GalleryItem;