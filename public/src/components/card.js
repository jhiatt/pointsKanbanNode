import React, {Component} from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            {this.props.data.cardTitle}
          </span>
          {this.props.data._id}
        </div>
      </div>
    );
  }
}
