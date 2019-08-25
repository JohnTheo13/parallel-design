import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, object, color } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components'

import { Header } from '../../src';
import { theme as defaultTheme } from '../../src/config'

export default storiesOf('Headers', module)
	.addDecorator(withKnobs)
  .add('Header default', () => (
    <Fragment>
      <Header as="h1">H1. Header</Header>
      <Header as="h2">H2. Header</Header>
      <Header as="h3">H3. Header</Header>
      <Header as="h4">H4. Header</Header>
      <Header as="h5">H5. Header</Header>
      <Header as="h6">H6. Header</Header>
			<Header
				as={select('as', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}
				style={object('style', { marginTop: '40px' })}
				color={color('color', 'red')}
			>
				Use knobs
			</Header>
    </Fragment>
	))
	.add('Header with ThemeProvider', () => (
		<Fragment>
			<ThemeProvider theme={defaultTheme}>
				<div>
					<Header as="h1">H1. Header</Header>
					<Header as="h2">H2. Header</Header>
					<Header as="h3">H3. Header</Header>
					<Header as="h4">H4. Header</Header>
					<Header as="h5">H5. Header</Header>
					<Header as="h6">H6. Header</Header>
				</div>
			</ThemeProvider>
		</Fragment>
	));
