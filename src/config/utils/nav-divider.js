// @flow

import { css } from 'styled-components';

export function navDivider(color: string = '#e5e5e5') {
	return css`
		height: 0;
		margin: ${0.5}rem 0;
		overflow: hidden;
		border-top: 1px solid ${color};
	`;
}

export default navDivider;
