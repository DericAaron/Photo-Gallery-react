import React, { Component } from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
  },
});

class Photo{
  constructor(){
    this.path = '',
    this.description = '';
    this.likes = 0
  }
}//end picture class

class SubmitForm extends Component {

  constructor(){
    super();
    this.state = new Photo();
  } //end constructor

  clearInput = () => {
    this.setState(new Photo());
  } //end clear input

  postPhoto = (event) => {
    event.preventDefault();
    console.log(this.state);
    
    axios.post('/gallery', this.state)
        .then( (response) => {
            this.props.getGallery();
            this.clearInput();
        }).catch( (error) => {
            console.log('Error posting photo');
            
        })
  } //end postPhoto

  handleChange = (propertyName) => (event) => {
    this.setState({...this.state.photo,
        [propertyName]: event.target.value}
    );
  } // end handleChange

  render() {
    return (
      <div>
          <h4>Add Photo</h4>
        <form onSubmit={this.postPhoto} className={this.props.classes.container} noValidate autoComplete="off">
          <TextField
            id="Image Url"
            label="Image Url"
            className={this.props.classes.textField}
            value={this.state.path}
            onChange={this.handleChange('path')}
            margin="normal"
          />
          <TextField
            id="description"
            label="Description"
            className={this.props.classes.textField}
            value={this.state.description}
            onChange={this.handleChange('description')}
            margin="normal"
          />
            {/* <input type="text" onChange={this.handleChange('path')} placeholder="Image Url" value={this.state.path}/> */}
            {/* <input type="text" className="descInput" onChange={this.handleChange('description')} placeholder="Description" value={this.state.description}/> */}
            <br/>
            <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SubmitForm);