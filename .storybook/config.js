import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme)
setOptions({
  name: 'parallel-design',
  url: 'https://github.com/JohnTheo13/parallel-design',
	panelPosition: 'right'
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.story\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
