'use strict';

import React from 'react';

require('styles/card/BasicInfo.styl');

class BasicInfoComponent extends React.Component {
  render() {
    return (
      <div className="basicinfo-component row">
        <h4>Name: Shi Min Shen</h4>
      </div>
    );
  }
}

BasicInfoComponent.displayName = 'CardBasicInfoComponent';

// Uncomment properties you need
// BasicInfoComponent.propTypes = {};
// BasicInfoComponent.defaultProps = {};

export default BasicInfoComponent;
