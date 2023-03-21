import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogModal, deleteTaskAction } from '../../reduxToolkit/tasksSlice';
import HtagComponent from '../HtagComponent';

const DialogModal = (props) => {
	const dispathAction = useDispatch();
	const { deletedTaskId } = useSelector((state) => state.tasks.deletedData);

	const agreeClickHandler = (event) => {
		event.stopPropagation();
		event.preventDefault();
		dispathAction(deleteTaskAction(deletedTaskId));
		dispathAction(closeDialogModal());
	};

	const closeClickHandler = (event) => {
		event.stopPropagation();
		event.preventDefault();
		dispathAction(closeDialogModal());
	};

	return (
		<div
			className="bg-black bg-opacity-70 fixed top-0 left-0
    flex w-full h-screen items-center justify-center"
		>
			<div className="rounded-lg bg-white w-1/3 h-72 p-5">
				<HtagComponent
					size="h2"
					className="my-8"
				>
					Are you sure you want to delete the task?
				</HtagComponent>

				<div className="flex justify-center gap-4 mx-auto pt-10">
					<button
						className="p-5 font-medium cursor-pointer text-red-700 hover:text-red-800"
						onClick={closeClickHandler}
					>
						Disagree
					</button>
					<button
						className="p-5 font-medium cursor-pointer text-green-700 hover:text-green-800"
						onClick={agreeClickHandler}
					>
						Agree
					</button>
				</div>
			</div>
		</div>
	);
};

export default DialogModal;
