'use strict';

import React from 'react';

require('styles/card/Attribute.styl');

class AttributeComponent extends React.Component {
  render() {

    const {name} = this.props;

    return (
      <div className="attribute-component">
        <h4>{name}</h4>
      </div>
    );
  }
}

AttributeComponent.displayName = 'CardAttributeComponent';

// Uncomment properties you need
// AttributeComponent.propTypes = {};
// AttributeComponent.defaultProps = {};

export default AttributeComponent;
