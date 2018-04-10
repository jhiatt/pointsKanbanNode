import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pullCardData } from '../actions/index';



class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.pullCardData('jhiatt');
    this.setState({ term: "" });
  }

  render() {
    return (
      <div>This my card
        <form onSubmit={this.onFormSubmit}>
          
          <span >
            <button type="submit" >Submit</button>
          </span>
        </form>
      </div>  
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({pullCardData}, dispatch);
}

export default connect(null, matchDispatchToProps)(Card);
