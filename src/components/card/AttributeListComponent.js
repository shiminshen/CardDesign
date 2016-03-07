'use strict';

import React from 'react';

import Attribute from './AttributeComponent.js';

require('styles/card/AttributeList.styl');

class AttributeListComponent extends React.Component {
  render() {

    const categoryList = [ 'Apperance', 'Personality', 'Relationship', 'Job', 'Learning Experience' ];

    return (
      <div className="attributelist-component row">
        {categoryList.map((cate, i) =>
          <Attribute key={i} name={cate}/>)
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
