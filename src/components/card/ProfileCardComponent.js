'use strict';

import React from 'react';

import AttributeList from './AttributeListComponent.js';
import BasicInfo from './BasicInfoComponent.js';
import { Motion, spring } from 'react-motion';

require('styles/card/ProfileCard.styl');
require('bootstrap/dist/css/bootstrap.min.css');

class ProfileCardComponent extends React.Component {

  render() {

    return (
      <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(10)}}>
        { interpolatingStyle => 
        <div style={interpolatingStyle} className="profilecard-component col-md-4 col-md-offset-4">
          <BasicInfo/>
          <AttributeList/>
        </div>
        }
      </Motion>
    );
  }
}

ProfileCardComponent.displayName = 'CardProfileCardComponent';

// Uncomment properties you need
// ProfileCardComponent.propTypes = {};
// ProfileCardComponent.defaultProps = {};

export default ProfileCardComponent;
