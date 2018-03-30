import React, {Component} from 'react';
import Card from '../containers/card';
import New_card_form from '../containers/newCard';

export default class App extends Component {
    render () {
        return (
          <div>
            <p>This is my new REACT APP and it's nice</p>
            <Card></Card>
            <New_card_form></New_card_form>
          </div>
        );
    }
}
