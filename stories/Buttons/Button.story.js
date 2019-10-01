import React, { Fragment } from 'react';
import { ThemeProvider, css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { Button } from '../../src';
import ButtonReadme from '../../docs/components/Buttons.md'

const theme = {
	button: {
		shared: css`font-size: 2rem;`,
		primary: css`color: black; background: red;`,
		custom: css`
			color: black;
			border-color: black;
			&:hover {
				color: grey;
				border-color: grey;
			}
		`
	},
	colors: {
		primary: 'blue', secondary: 'green', disabled: 'grey'
	}
};

storiesOf('Buttons', module)
	.add('All Buttons', () => (
		<Fragment>
			<h2>Default Buttons</h2>
			<div>
				<Button tag="primary" height="68px" shape="sharp">
					Primary
				</Button>
				<Button tag="secondary" height="68px" shape="sharp">
					Secondary
				</Button>
			</div>
			<h2 style={{ marginTop: '120px' }} >With Theme Provider</h2>
			<ThemeProvider theme={theme}>
				<div>
					<Button tag="custom" height="68px" shape="sharp">
						Custom
					</Button>
					<Button tag="ghost" height="68px" shape="sharp">
						Ghost
					</Button>
					<Button tag="secondary" height="68px" shape="rounded">
						secondary
					</Button>
				</div>
			</ThemeProvider>
		</Fragment>
	))
	.addDecorator(withKnobs)
	.addParameters({
		readme: {
			content: `<!-- STORY --><!-- PROPS -->`,
			// This is not necessary in normal situation. The reason for
			// `includePropTables` is needed here is because `ButtonWithPropTypes` is
			// specified in `excludePropTables` at `config.js`
			includePropTables: [Button],
			sidebar: ButtonReadme
		},
	})
	.add(
		'Button example with info', () => (
			<Button
				tag={select('tag', ['primary', 'secondary', 'ghost'], 'primary')}
				height={text('height', '80px')}
				width={text('width', '150px')}
				shape={select('shape', ['sharp', 'rounded', 'circled'], 'rounded')}
				ghost={boolean('ghost', false)}
				disabled={boolean('disabled', false)}
			>
				Interactive
			</Button>
		)
	);
