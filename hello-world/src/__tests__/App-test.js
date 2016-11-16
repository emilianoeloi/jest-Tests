import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('../logo.svg', () => 'logo');

describe('App.js', () => {
  it("Should have App Component", () => {
    const testId = "ABC123";
    const component = renderer.create(
      <App />
    );
    expect(component).toMatchSnapshot();
  });
})
