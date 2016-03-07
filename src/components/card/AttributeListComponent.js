'use strict';

import React from 'react';

import Attribute from './AttributeComponent.js';

require('styles/card/AttributeList.styl');

class AttributeListComponent extends React.Component {
  render() {
    return (
      <div className="attributelist-component row">
        <Attribute/>
        <Attribute/>
        <Attribute/>
        <Attribute/>
      </div>
    );
  }
}

AttributeListComponent.displayName = 'CardAttributeListComponent';

// Uncomment properties you need
// AttributeListComponent.propTypes = {};
// AttributeListComponent.defaultProps = {};

export default AttributeListComponent;
