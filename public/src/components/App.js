import React, {Component} from 'react';
import NewCardForm from '../containers/newCard';
import Column from '../containers/column';
import {Container} from 'reactstrap';


export default class App extends Component {
  render () {
      return (
        <div>
          <Container>
            <Column></Column>
            <NewCardForm></NewCardForm>
          </Container>
        </div>
      );
  }
}

