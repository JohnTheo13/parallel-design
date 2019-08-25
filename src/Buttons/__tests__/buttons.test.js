import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button } from '../../src';

test('it has hover color', () => {
	const button = renderer
		.create(
			<Button
				tag="primary"
				height="80px"
				width="150px"
				shape="rounded"
				disabled={false}
			>
				Interactive
			</Button>
		)
		.toJSON();
	expect(button).toHaveStyleRule('background-color', '#40a9ff', {
		modifier: ':hover'
	});
});

test('Primary button snap', () => {
	const button = renderer
		.create(
			<Button
				tag="primary"
				height="80px"
				width="150px"
				shape="rounded"
				disabled={false}
			>
				Interactive
			</Button>
		)
		.toJSON();
	expect(button).toMatchSnapshot();
});
