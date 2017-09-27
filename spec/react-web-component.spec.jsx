import React from 'react/addons';
import ReactWebComponent from '../lib/react-web-component.jsx';

describe('ReactWebComponent', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactWebComponent/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-web-component');
  });
});
