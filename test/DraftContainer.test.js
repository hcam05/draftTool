import React from 'react';
import ReactDOM from 'react-dom';
import Draft from '../app/containers/Draft';


import { shallow, mount, render } from "enzyme";

it('Draft renders', () => {
  const wrapper = shallow(<Draft />);
  const inst = wrapper.instance();
  expect(inst).toBeTruthy();
})

it('Draft should mount in a full DOM', () => {
  expect(mount(<Draft />)
  .find('Draft').length).toBe(1);
});

it('Draft should contain Draft', () => {
  const wrapper = mount(<Draft />);
  expect(wrapper.find('Draft').exists()).toBe(true);
});

