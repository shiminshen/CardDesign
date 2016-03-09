require('normalize.css');
require('styles/App.css');

import React from 'react';

import CardList from './card/CardListComponent.js';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <CardList/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
