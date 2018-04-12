import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pullCardData } from '../actions/index';
import Card from '../components/card';


//missing anything here?  Also still need to get the data from the api into Redux
class Column extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = { term: "" };

    // this.onFormSubmit = this.onFormSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  // onFormSubmit(event) {
  //   event.preventDefault();

  //   // We need to go and fetch weather data
  //   this.props.pullCardData('jhiatt');
  //   this.setState({ term: "" });
  // }
        // How do I call this function to make the API call????
  // this.props.pullCardData('jhiatt');

  componentDidMount() {
    this.props.pullCardData('jhiatt');
    {console.log('hii', this.props.cards)};
  }

  // renderCards(cardData) {
  //   return (
  //       <div key={cardData.id} >
  //       heeeeeeheeeeheeee
  //         {console.log('realliffee', cardData.cardTitle)}{cardData.cardTitle}
  //       </div>  
  //   );
  // }

  render() {
    const { cards } = this.props;
    return (
      <div>
        <Col s={1}>
          {cards.map(card => <Card key={card.id} data={card}></Card>)}

        </Col>

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
