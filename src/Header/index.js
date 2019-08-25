// @flow

import { createElement, type Node } from 'react';
import styled from 'styled-components';
import { theme as defaultTheme, themeProps } from '../config';

const { header } = defaultTheme;

type Props = {
	as: string,
	children: Node,
	color?: string
};

const Element = ({ as, children, ...props }: Props) =>
	createElement(as, props, children);

const Header = styled(Element)`
	margin-bottom: ${({ as }) =>
		themeProps(`header.${as}.marginButton`, header[as].marginBottom)};
	font-size: ${({ as }) =>
		themeProps(`header.fontSize.${as}`, header[as].fontSize)};
	font-family: ${({ as }) =>
		themeProps(`header.${as}.fontFamily`, header[as].fontFamily)};
	font-weight: ${({ as }) =>
		themeProps(`header.${as}.fontWeight`, header[as].fontWeight)};
	line-height: ${({ as }) =>
		themeProps(`header.${as}.lineHeight`, header[as].lineHeight)};
	color: ${({ color, as }) =>
		color || themeProps(`header.${as}.color`, header[as].color)};
`;

export default Header;
