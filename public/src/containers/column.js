import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pullCardData } from '../actions/index.js';


//missing anything here?  Also still need to get the data from the api into Redux
class Column extends Component {
  renderList() {
    return this.props.cards.map((card) => {
      return (
          <div key={card.title} >{card.title}</div>  
        );
    });
  }
  render() {
    return (
      <div class="card">
        {this.renderList() }
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
}


function matchDispatchToProps(dispatch) {
  bindActionCreators({pullCardData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Column);