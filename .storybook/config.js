import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme)
setOptions({
  name: 'parallel-design',
  url: 'https://bitbucket.info.nl/projects/IDS/repos/parallel-design/browse',
	panelPosition: 'right'
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.story\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
