import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {newCardData} from '../actions/index.js';


class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = { cardTitle: '', cardDescription: ''};

    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onFormSubmit() {
    // event.preventDefault();]
    this.newCardData(this.props.state);

  }

  onInputChange(event) {
    

  }

  render() {
    return (
      <div className="new-card-form">New Card | 
        New Title
        <input
          value={this.state.cardTitle}
          onChange={event => this.onInputChange(event.target.value)} />
        New Description
        <input value={this.state.cardDescription}
          onChange={event => this.onInputChange(event.target.value)} />
        
      </div>
    );
  }
}


export default NewCardForm;