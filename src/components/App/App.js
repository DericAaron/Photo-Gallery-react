import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import SubmitForm from '../SubmitForm/SubmitForm';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const styles = {
  root: {
    backgroundColor: '#FFFFFA',
  },
};

// https://material-ui.com/customization/themes/
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends Component {

  constructor(){
    super();
    this.state = {
      gallery: [],
      state: 0
    }
  } //end constructor

  componentDidMount(){
    this.getGallery();
  }//end component did mount

  deletePhoto = (id) => (event) => {
    event.preventDefault();
    axios.delete(`/gallery/delete/${id}`)
      .then( (response) => {
        // get updated data from the server
        this.getGallery();
      }).catch( (error) => {
        console.log('Error in delete');
        alert('Delete request failed');
      }); 
  }

  getGallery = () => {

    console.log('in Get');
    
    axios.get('/gallery')
      .then( ( response) => {
        this.setState({ gallery: [...response.data]})
      }).catch( (error) => {
        console.log('Error in Get Gallery');
        alert('Unable to get photos from server.');
        
      });
  } // end getGallery

  putLike = (id) => (event) => {
    console.log(id);
    
    axios.put(`/gallery/like/${id}`)
      .then( (response) => {
        // get updated data from the server
        this.getGallery();
      }).catch( (error) => {
        console.log('Error in putLike');
        alert('Unable to like Photo!');
      }); 
  } // end putLike
  // 
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className={this.props.classes.root} className="App grid-container" >
        <div className="head">
        <Header />
        </div>
       
        <br/>
        <div className="form">
        <SubmitForm getGallery={this.getGallery}/>
        </div>
        <div className="body">
        <GalleryList gallery={this.state.gallery} putLike={this.putLike} deletePhoto={this.deletePhoto}/>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
