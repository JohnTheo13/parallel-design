// @flow
import React from 'react';
import styled from 'styled-components';
import { colors as col } from '../config';
import icons from './Icons';

type IconType = {
	viewBox?: string,
	style?: Object,
	color?: {
		default: string,
		hover: string
	},
	hover?: boolean,
	width?: string,
	height?: string,
	onClick?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	className?: string,
	name: string
};

const StyledSvg = styled.svg`
	fill: ${({ color, hover }) => (hover ? color.hover : color.default)};
	height: ${({ height }) => `${height}px`};
	width: ${({ width }) => `${width}px`};
	&:hover {
		fill: ${({ color }) => color.hover};
	}
`;

const Icon = ({
	viewBox,
	style,
	color,
	className,
	onClick,
	onMouseOver,
	onMouseOut,
	width,
	height,
	name,
	hover
}: IconType) => (
	<StyledSvg
		version="1.1"
		x="0px"
		y="0px"
		viewBox={viewBox}
		style={style}
		color={color}
		className={className}
		onClick={onClick}
		onMouseOver={onMouseOver}
		onFocus={onMouseOver}
		onMouseOut={onMouseOut}
		height={height}
		width={width}
		onBlur={onMouseOut}
		id={name}
		hover={hover}
	>
		{icons(name)}
	</StyledSvg>
);

Icon.defaultProps = {
	viewBox: '0 0 48 48',
	style: undefined,
	color: {
		default: col.dark,
		hover: col.dark
	},
	hover: false,
	className: '',
	onClick: undefined,
	onMouseOver: undefined,
	onMouseOut: undefined,
	width: '20',
	height: '20'
};

export default Icon;
