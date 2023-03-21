import PtagComponent from './PtagComponent';
import TaskActionButtons from './TaskActionButtons';

const Task = (props) => {
	const { task } = props;

	return (
		<li
			className={`flex items-center justify-between p-3 mb-2 rounded-lg shadow-md space-x-4
      ${task.completed ? 'bg-green-100' : task.important ? 'bg-red-100' : 'bg-gray-100'}`}
		>
			<div className="pr-2 max-w-full">
				<PtagComponent
					size="md"
					weight="bold"
				>
					{task.title}
				</PtagComponent>
			</div>

			<TaskActionButtons
				taskId={task.id}
				isCompleted={task.completed}
				isImportant={task.important}
			/>
		</li>
	);
};

export default Task;
