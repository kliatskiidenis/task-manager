import React from 'react';

export const ButtonComponent = (props) => {
	const { isDisabled = false, children, buttonClickHandler } = props;

	return (
		<button
			className={`px-10 py-5 mx-auto w-full text-white rounded ${
				!isDisabled ? 'bg-green-700' : 'bg-gray-400'
			}`}
			type="text"
			onClick={(e) => buttonClickHandler(e)}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};

export default ButtonComponent;
