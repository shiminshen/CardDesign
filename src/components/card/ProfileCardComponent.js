'use strict';

import React from 'react';

import AttributeList from './AttributeListComponent.js';
import BasicInfo from './BasicInfoComponent.js';

require('styles/card/ProfileCard.styl');
require('bootstrap/dist/css/bootstrap.min.css');

class ProfileCardComponent extends React.Component {
  render() {


    return (
      <div className="profilecard-component col-md-4 col-md-offset-4">
        <BasicInfo/>
        <AttributeList/>
      </div>
    );
  }
}

ProfileCardComponent.displayName = 'CardProfileCardComponent';

// Uncomment properties you need
// ProfileCardComponent.propTypes = {};
// ProfileCardComponent.defaultProps = {};

export default ProfileCardComponent;
