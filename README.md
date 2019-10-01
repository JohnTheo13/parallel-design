Parallel-Design
================
publishe?
## Project setup & maintenance
1. Clone the project
1. To start storybook just ```yarn start```

## How to use
Import the component(s) you want to use into your project, there are four ways to change the styling:
1. Using the Theme Provider *(details in next section):
	```
		import { ThemeProvider } from 'styled-components';
			:
			:
		const theme = {...}
			:
			:
		return (
			<ThemeProvider theme={theme}>
				<App />
			<ThemeProvider>
		)
	```
1. Extending component(s):
	```
	import styled from 'styled-components';
	import <Component> from 'parallel-design';
		:
		:
	const ExtendedComponent = styled(Component)`
		color: black;
		text-align: right;
	`;
	```

1. Inline style objects:
	```
		:
		:
	return <Component style={{ textAlign: 'right' }}>
	`;
	```
1. Using classes:
	```
		:
		:
	return <Component className="name_class">
	```


# Documentation
 1. Simple usage*:
	- [configuration](./docs/configuration#readme)
 1. [Extended usage](./docs/components#readme):
	- [Inputs](./docs/components/Inputs.md)
	- [Buttons](./docs/components/Buttons.md)
	- [Icons](./docs/components/Icons.md)
	- [Header](./docs/components/Header.md)

### Description
React components to use accross your project, key values:
- small
- reusable
- configurable
- extensible

## Project's Stack
This project is built withStyled-Components for the styling and Flow for Type checking:

- [Styled-Components](https://styled-components.com)
- [Flow](https://flow.org)
- [storybook](https://storybook.js.org)
- [material-icons](https://material.io/tools/icons), temporary till we create our own fonts
- [lodash.get](https://lodash.com/docs)

## ESLint
Yes, we lint our files.   
Lint will ensure that so best practices are followed. Search the error messages and learn with that.   
Make sure that all your .js files are passing the lint check before open a PR.      
There is pre-commit hook that won't allow you to commit without fixing the lint alerts.

## Unit Test
Following TDD you need first to write a small story, with an empty component and the unit tests and then we develop the component.   
Test stack consist of [jest](https://jestjs.io), [Enzyme](http://airbnb.io/enzyme/docs/) and [Sinon](http://sinonjs.org).  
The test are attached with an addon to the component story. You can follow the tests results directly through Storybook at the right panel under the specification tab.
