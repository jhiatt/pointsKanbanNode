import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {newCardData} from '../actions/index.js';

class newCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = { cardTitle: '', cardDescription: ''};
  }

  onFormSubmit(event) {
    // event.preventDefault();
  }

  render() {
    return (
      <div className="new-card-form">This my card form
        <input
          vale={this.state.cardTitle}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}


export default newCardForm;