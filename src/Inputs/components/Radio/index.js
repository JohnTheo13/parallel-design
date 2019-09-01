// @flow
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import FieldWrapper from './Radio.style';

type RadioType = {
	name: string,
	id: string,
	label: string,
	disabled?: boolean,
	checked: boolean,
	onChange: Function
};

const Radio = ({
	name,
	id,
	label,
	disabled,
	checked,
	onChange,
	...props
}: RadioType) => (
	<FieldWrapper {...props}>
		<input
			type="radio"
			id={id}
			name={name}
			disabled={disabled}
			checked={checked}
			onChange={onChange}
		/>
		<label htmlFor={name}>{label}</label>
	</FieldWrapper>
);

Radio.defaultProps = {
	disabled: false
};

export default Radio;
