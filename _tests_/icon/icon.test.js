/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Icon } from '../../src';

const color = { default: 'red', hover: 'blue' };
const icon = renderer
	.create(<Icon name="close" color={color} width="28" height="28" />)
	.toJSON();

test('icon has the default colors passed', () => {
	expect(icon).toHaveStyleRule('fill', color.default);
	expect(icon).toHaveStyleRule('fill', color.hover, {
		modifier: ':hover'
	});
});

test('icon has the passed width', () => {
	expect(icon).toHaveStyleRule('width', '28px');
});

test('icon has the passed height', () => {
	expect(icon).toHaveStyleRule('height', '28px');
});
