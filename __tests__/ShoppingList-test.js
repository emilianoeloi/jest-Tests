import React from 'react';
import { shallow } from 'enzyme';
import ShoppingList from '../ShoppingList';

it("Should have a h1 text: 'Shopping List for Rhyana'", () => {
  const name = 'Rhyana';
  const shoppingList = shallow(
    <ShoppingList name={name} />
  );
  expect(shoppingList.find('h1').text()).toEqual('Shopping List for '+name);
});

it("Should have 'Instagram' text on first li", () => {
  const shoppingList = shallow(
    <ShoppingList name={name} />
  );
  expect(shoppingList.find('li').first().text()).toEqual('Instagram');
});

it("Should have 'Oculus' text on last li", () => {
  const shoppingList = shallow(
    <ShoppingList name={name} />
  );
  expect(shoppingList.find('li').last().text()).toEqual('Oculus');
});
