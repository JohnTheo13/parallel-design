import React, { Fragment } from 'react';
import { ThemeProvider, css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
	withKnobs,
	select,
	text,
	boolean,
	object
} from '@storybook/addon-knobs';

import { Input, Checkbox, Radio } from '../../src';
import README from '../../src/Inputs/README.md';

const theme = {
	input: {
		border: {
			color: {
				// active: 'red',
				// default: 'grey',
				// disabled: 'yellow'
			}
		},
		common: css`
		 	border-width: 0 0 2px 0;
		 	outline: 0;
		 	color: black;
		 	padding: 4px;
		 	border-radius: 0;
			width: 100%;
		 `
	},
	feedback: {
		icon: css`
			font-size: 16px;
			padding: 16px;
		`
		},
	label: {
		common: css`
			width: 100%;
			font-family: initial;
			font-weight: initial;
		`,
		color: 'blue'
	},
	color: {
		primary: 'green',
		secondary: 'green',
		disabled: 'red'
	}
};

storiesOf('Inputs', module)
	.addDecorator(withKnobs)
	.addParameters({
		readme: {
			content: `<!-- STORY --><!-- PROPS -->`,
			// This is not necessary in normal situation. The reason for
			// `includePropTables` is needed here is because `ButtonWithPropTypes` is
			// specified in `excludePropTables` at `config.js`
			includePropTables: [Input],
			sidebar: README
		},
	})
	.add(
		'Input simple & info',() => (
			<Fragment>
				<Input
					placeholder="test"
					label="Label"
					name="test"
					width={text('width', '150px')}
					type={select('type: ', ['text', 'password', 'textarea'], 'text')}
					disabled={boolean('disabled: ', false)}
					feedback={object('feedback', { status: 'error', message: 'error' })}
				/>
				<ThemeProvider theme={theme}>
				<Input
					placeholder="test"
					label="Label-theme"
					name="theme-test"
					width={text('theme-width', '150px')}
					type={select('theme-type: ', ['text', 'password', 'textarea'], 'text')}
					disabled={boolean('theme-disabled: ', false)}
					feedback={object('theme-feedback', { status: 'success', message: 'error' })}
				/>
				</ThemeProvider>
			</Fragment>
		))
		.addParameters({
			readme: {
				content: `<!-- STORY --><!-- PROPS -->`,
				// This is not necessary in normal situation. The reason for
				// `includePropTables` is needed here is because `ButtonWithPropTypes` is
				// specified in `excludePropTables` at `config.js`
				includePropTables: [Checkbox],
				sidebar: README
			},
		})
	.add(
		'Checkbox simple & info', () => (
			<Fragment>
				<Checkbox
					name="test"
					id="test"
					label="Label"
					checked={boolean('checked:', false)}
					disabled={boolean('disabled:', false)}
					onChange={() => null}
				/>
				<ThemeProvider theme={theme}>
					<Checkbox
						name="theme"
						id="theme"
						label="Them"
						checked={boolean('theme-checked:', false)}
						disabled={boolean('theme-disabled:', false)}
						onChange={() => null}
					/>
				</ThemeProvider>
			</Fragment>
		))
		.addParameters({
			readme: {
				content: `<!-- STORY --><!-- PROPS -->`,
				// This is not necessary in normal situation. The reason for
				// `includePropTables` is needed here is because `ButtonWithPropTypes` is
				// specified in `excludePropTables` at `config.js`
				includePropTables: [Radio],
				sidebar: README
			},
		})
	.add(
		'Radio simple & info', () => (
			<div>
				<Radio
					style={{ marginTop: '40px' }}
					name="test"
					id="test"
					label="Label"
					checked={boolean('checked:', false)}
					disabled={boolean('disabled:', false)}
					onChange={() => null}
				/>
				<ThemeProvider theme={theme}>
					<Radio
						name="theme"
						id="theme"
						label="Them"
						checked={boolean('theme-checked:', false)}
						disabled={boolean('theme-disabled:', false)}
						onChange={() => null}
					/>
				</ThemeProvider>
			</div>
		));
