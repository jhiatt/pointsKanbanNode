import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pullCardData } from '../actions/index';
import CardJob from '../components/cardJob';
import {Col, Row} from 'reactstrap';



//missing anything here?  Also still need to get the data from the api into Redux
class Column extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = { term: "" };

    // this.onFormSubmit = this.onFormSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.pullCardData('jhiatt');
    {console.log('hii', this.props.cards)};
  }

  render() {
    const { cards } = this.props;
    return (
      <div>
        <Row>
          <Col xs="3">
            {cards.map(card => <CardJob key={card.id} data={card}></CardJob>)}

          </Col>
        </Row>

      </div>
      );
  }
}

// function mapStateToProps(state) {
//   return {
//     cards: state.cards
//   };
// }

//cleaner:
function mapStateToProps({cards}) {
  return {cards};
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({pullCardData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Column);
