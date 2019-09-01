/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../../src';
import * as names from '../../src/Icon/Icons/IconNames';

const wrapper = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between'
};

storiesOf('Project s svg ', module).add('All svgs', () => (
	<div style={wrapper}>
		{Object.keys(names).map(icon => (
			<Fragment key={icon}>
				<Icon name={names[icon]} />
			</Fragment>
		))}
	</div>
));
