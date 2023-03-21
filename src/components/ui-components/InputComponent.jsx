import React from 'react';

const InputComponent = (props) => {
	const { valueProps, placeholder, inputCangeHandler } = props;

	return (
		<input
			placeholder={placeholder}
			type="text"
			value={valueProps || ''}
			className="text-gray-500 bg-gray-100 p-5 mb-3 w-full border rounded hover:border-green-800"
			onChange={(e) => {
				inputCangeHandler(e);
			}}
		/>
	);
};

export default InputComponent;
