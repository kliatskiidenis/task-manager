import React from 'react';
import { GrStatusWarning } from 'react-icons/gr';

const AmptyListMessage = ({ filterQueryParam }) => {
	return (
		<div className="flex flex-col items-center mt-11 p-5 gap-7 border-2 border-solid border-orange-600 rounded-[4px]">
			<GrStatusWarning
				size={40}
				className="stroke-orange-600 fill-orange-600"
			/>
			<p className="font-semibold text-center mx-10 text-orange-600 uppercase">
				There are no {filterQueryParam} tasks!
			</p>
		</div>
	);
};

export default AmptyListMessage;
