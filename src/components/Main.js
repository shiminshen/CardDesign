require('normalize.css');
require('styles/App.css');

import React from 'react';

import ProfileCard from './card/ProfileCardComponent.js';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ProfileCard/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
