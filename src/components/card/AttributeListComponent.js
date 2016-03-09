'use strict';

import React from 'react';

import Attribute from './AttributeComponent.js';

require('styles/card/AttributeList.styl');

class AttributeListComponent extends React.Component {
  constructor(props) {
    super(props);

    let attrStatus = {};

    Object.keys(props.card).forEach((attr) => attrStatus[attr] = false)

    this.state = attrStatus;
  }

  handleClick = (attr) => {

    this.setState({
      ...this.state,
      [attr]: !this.state[attr]
    });

  }

  render() {

    const {card} = this.props;
    
    // construct nest attribute list.
    return (
      <div className="attributelist-component">
        {Object.keys(card).map((attr) =>
        typeof(card[attr]) == 'object' ?
        <div key={attr} onClick={this.handleClick.bind(this, attr)}>
          <Attribute name={attr}/>
          <div className={this.state[attr] ? '' : 'nest-list'}>
            <AttributeListComponent card={card[attr]}/>
          </div>
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
