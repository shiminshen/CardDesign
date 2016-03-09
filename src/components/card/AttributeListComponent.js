'use strict';

import React from 'react';
import classNames from 'classnames';

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
    console.log(this.state);

    this.setState({
      ...this.state,
      [attr]: !this.state[attr]
    });

  }

  render() {

    const {card} = this.props;

    let listComponents = Object.keys(card).map((attr) => {

      let nestClass = classNames({
        'nest-list': !this.state[attr]
      })

      return typeof(card[attr]) == 'object' ?
        <div key={attr} >
          <div onClick={this.handleClick.bind(this, attr)}>
            <Attribute name={attr}/>
          </div>
          <div className={nestClass}>
            <AttributeListComponent card={card[attr]}/>
          </div>
        </div>
          : <Attribute key={attr} name={attr}/>
            });
    
    // construct nest attribute list.
    return (
      <div className="attributelist-component">
        {listComponents}
      </div>
    );
  }
}

AttributeListComponent.displayName = 'CardAttributeListComponent';

// Uncomment properties you need
// AttributeListComponent.propTypes = {};
// AttributeListComponent.defaultProps = {};

export default AttributeListComponent;
