import { useDispatch } from 'react-redux';
import { FiCheckCircle, FiStar, FiTrash2 } from 'react-icons/fi';
import {
	openDialogModal,
	completedTaskAction,
	importantTaskAction,
} from '../reduxToolkit/tasksSlice';

const TaskActionButtons = (props) => {
	const { taskId, isCompleted, isImportant } = props;

	const dispathAction = useDispatch();

	const completedClickHandler = (id) => {
		dispathAction(completedTaskAction(id));
	};

	const checkImportantClickHandler = (id) => {
		dispathAction(importantTaskAction(id));
	};

	const deleteClickHandler = (id) => {
		dispathAction(openDialogModal(id));
	};

	return (
		<div className="flex items-center gap-3">
			<button
				className="w-8 h-8 p-1 cursor-pointer"
				type="button"
				onClick={() => completedClickHandler(taskId)}
			>
				<FiCheckCircle
					className={`cursor-pointer hover:stroke-green-500 ${
						isCompleted ? 'stroke-green-500 fill-green-500' : 'stroke-slate-500'
					}}`}
				/>
			</button>

			<button
				className="w-8 h-8 p-1 rounded-full cursor-pointer"
				type="button"
				onClick={() => checkImportantClickHandler(taskId)}
			>
				<FiStar
					className={`cursor-pointer hover:stroke-red-600 ${
						isImportant ? 'stroke-red-600 fill-red-600' : 'stroke-slate-500'
					}}`}
				/>
			</button>

			<button
				className="w-8 h-8 p-1 cursor-pointer hover:stroke-green-800"
				type="button"
				onClick={() => deleteClickHandler(taskId)}
			>
				<FiTrash2 className="hover:stroke-red-500" />
			</button>
		</div>
	);
};

export default TaskActionButtons;
