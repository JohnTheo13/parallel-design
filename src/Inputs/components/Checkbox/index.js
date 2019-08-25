// @flow
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

import CheckboxWrapper from './Checkbox.style';

type Check = {
	label: string,
	name: string,
	onChange: Function,
	checked: boolean,
	disabled?: boolean,
	id: string
};

const Checkbox = ({
	label,
	name,
	disabled,
	id,
	checked,
	onChange,
	...props
}: Check) => (
	<CheckboxWrapper {...props}>
		<input
			type="checkbox"
			id={id}
			name={name}
			disabled={disabled}
			checked={checked}
			onChange={onChange}
		/>
		<label htmlFor={name}>{label}</label>
	</CheckboxWrapper>
);

Checkbox.defaultProps = {
	disabled: false
};

export default Checkbox;
