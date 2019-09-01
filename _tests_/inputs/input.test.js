/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import 'jest-styled-components';
import { Input } from '../../src';

Enzyme.configure({ adapter: new Adapter() });

test('Input is type text', () => {
	const input = shallow(<Input />);
	expect(input.childAt(0).prop('type')).toEqual('text');
});

test('Input is type password', () => {
	const input = shallow(<Input type="password" />);
	expect(input.childAt(0).prop('type')).toEqual('password');
});

test('Input has label', () => {
	const input = shallow(<Input label="Label" />);
	expect(input.find('label').length).toEqual(1);
	expect(input.find('label').text()).toEqual('Label');
	expect(input.find('label').text()).toEqual('Label');
});

test('Input has feddback', () => {
	const input = shallow(
		<Input feedback={{ status: 'error', message: 'error' }} />
	);
	expect(input.find('div.feedback').length).toEqual(1);
	expect(input.find('div.feedback').text()).toEqual('error');
});
