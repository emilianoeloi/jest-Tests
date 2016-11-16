import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it("Should have App Component", () => {
  const app = shallow(
    <App />
  );
  expect(app).notNull();
});
