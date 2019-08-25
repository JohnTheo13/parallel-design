import React, { useState } from 'react';

import { Checkbox } from 'inputs';

const Check = () => {
	const [checked, change] = useState(true);
	const handleChange = e => {
		change(e.target.checked);
	};
	return (
		<Checkbox
			label="checker"
			name="check"
			id="check"
			onChange={handleChange}
			checked={checked}
		/>
	);
};

export default Check;
