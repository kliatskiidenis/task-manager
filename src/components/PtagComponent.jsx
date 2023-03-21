import React from 'react';

const PtagComponent = ({ size, weight = 'normal', children }) => {
	switch (size) {
		case 'lg':
			return (
				<p
					className={`${
						weight === 'bold' ? 'font-semibold' : 'font-normal'
					} text-gray-500 text-base mb-5`}
				>
					{children}
				</p>
			);

		case 'md':
			return (
				<p
					className={`${
						weight === 'bold' ? 'font-semibold' : 'font-normal'
					} text-gray-500 text-sm mb-4`}
				>
					{children}
				</p>
			);

		case 'sm':
			return (
				<p
					className={`${weight === 'bold' ? 'font-semibold' : 'font-normal'} text-gray-500 text-xs`}
				>
					{children}
				</p>
			);

		default:
			return <></>;
	}
};

export default PtagComponent;
