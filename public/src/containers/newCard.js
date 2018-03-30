import React, { Component } from 'react';
import { connect } from 'react-redux';

class newCardForm extends Component {

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