'use strict';

import React from 'react';
import ProfileCard from './ProfileCardComponent.js';
import CardsStore from '../../stores/CardsStore.js';

require('styles/card/CardList.styl');

class CardsListComponent extends React.Component {
  constructor() {
    super();
    this.state = CardsStore.getState();
  }

  render() {
    const {cards} = this.state;


    return (
      <div className="cardlist-component">
        {cards.map((card, i) =>
        <ProfileCard key={i} card={card}/>)
        }
      </div>
    );
  }
}

CardsListComponent.displayName = 'CardCardListComponent';

// Uncomment properties you need
// CardsListComponent.propTypes = {};
// CardsListComponent.defaultProps = {};

export default CardsListComponent;
