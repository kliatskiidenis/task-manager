import React from 'react';

const HtagComponent = ({ size, children }) => {
	switch (size) {
		case 'h1':
			return <h1 className="text-2xl text-gray-600 font-bold mb-4">{children}</h1>;

		case 'h2':
			return <h2 className="text-lg text-gray-600 font-bold mb-3">{children}</h2>;

		default:
			return <></>;
	}
};

export default HtagComponent;
