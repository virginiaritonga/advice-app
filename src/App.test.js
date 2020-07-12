import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from './App';
import Home from './views/Home'
import Feedback from './views/Feedback'

test('fetch advice', () => {
  const component = renderer.create(
    <Home />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapShot();

  component.getInstance()._handleNewAdvice();
  tree = component.toJSON();
  expect(tree).toMatchSnapShot();
})

test('change name', () => {
  const component = renderer.create(
    <Feedback />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapShot();

  component.getInstance().nameChanged();
  tree = component.toJSON();
  expect(tree).toMatchSnapShot();
})
