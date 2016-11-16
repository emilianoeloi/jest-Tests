import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const __DEV__ = false;

describe('index iOS', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Index />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('change Platform', () => {
    const component = renderer.create(
      <Index />
    );
    expect(component).toMatchSnapshot();

    let tree = component.toJSON();
    tree.props.onPress();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
