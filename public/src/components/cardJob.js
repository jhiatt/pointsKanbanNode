import React, {Component} from 'react';
import {Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';

export default class CardJob extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            {this.props.data.cardTitle}
          </CardTitle>
          {this.props.data._id}
        </CardBody>
      </Card>
    );
  }
}
