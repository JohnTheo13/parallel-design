import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { colors } from '../../../src/config';

const colorskeys = Object.keys(colors);

const style = color => ({
	backgroundColor: color,
	height: '90px',
	width: '140px',
	margin: '14px',
	textAlign: 'center',
	border: '1px solid'
});

const containerStyle = {
	display: 'flex',
	flexWrap: 'wrap-reverse'
};

const colorStyle = {
	background: 'white',
	position: 'relative',
	bottom: '-39px',
	borderTop: '1px solid'
};

storiesOf('Quarks', module).add('Color Guide', () => (
	<Fragment>
		<div style={containerStyle}>
			{colorskeys.map(color => (
				<div style={style(colors[color])} key={color}>
					<span>{color}</span>
					<div style={colorStyle}>{colors[color]}</div>
				</div>
			))}
		</div>
	</Fragment>
));
