export const TasksListNav = (props) => {
	const { filteredHandler, filteredTasks } = props;

	return (
		<nav className="flex items-center mb-3 gap-5 sticky top-0 pt-3 pb-1 bg-white">
			<span
				className="text-slate-500 font-medium py-1 text-sm cursor-pointer hover:text-green-700"
				onClick={() => filteredHandler('all')}
			>
				All
			</span>

			<span
				className="text-slate-500 font-medium py-1 text-sm cursor-pointer hover:text-green-700"
				onClick={() => filteredHandler('completed')}
			>
				Completed
			</span>

			<span
				className="text-slate-500 font-medium py-1 text-sm cursor-pointer hover:text-green-700"
				onClick={() => filteredHandler('important')}
			>
				Important
			</span>

			<div className="ml-auto text-sm text-slate-500">Showed {filteredTasks.length} tasks.</div>
		</nav>
	);
};

export default TasksListNav;
