'use strict';

import React from 'react';

import Attribute from './AttributeComponent.js';

require('styles/card/AttributeList.styl');

class AttributeListComponent extends React.Component {
  render() {

    const {card} = this.props;
    
    // construct nest attribute list.
    return (
      <div className="attributelist-component">
        {Object.keys(card).map((attr) =>
        typeof(card[attr]) == 'object' ?
        <div key={attr}>
          <Attribute name={attr}/>
          <AttributeListComponent card={card[attr]}/>
        </div>
        : <Attribute key={attr} name={attr}/>)
        }
      </div>
    );
  }
}

AttributeListComponent.displayName = 'CardAttributeListComponent';

// Uncomment properties you need
// AttributeListComponent.propTypes = {};
// AttributeListComponent.defaultProps = {};

export default AttributeListComponent;
