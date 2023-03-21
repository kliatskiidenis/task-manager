import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import HtagComponent from '../components/HtagComponent';
import TaskItem from '../components/TaskItem';
import TasksListNav from '../components/TasksListNav';
import { filterTasksCreator } from '../utis';
import { getAllTasksAction } from '../reduxToolkit/tasksSlice';
import { useSearchParams } from 'react-router-dom';
import AmptyListMessage from '../components/ui-components/AmptyListMessage';

const AllTasks = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { tasksList, taskQty } = useSelector((state) => state.tasks);
	const dispath = useDispatch();
	const [filteredTasks, setFilteredTasks] = useState(tasksList);
	const filterQueryParam = searchParams.get('filter');

	useEffect(() => {
		dispath(getAllTasksAction());
		searchParams.set('filter', 'all');
		setSearchParams(searchParams);
	}, [taskQty, dispath]);

	useEffect(() => {
		setFilteredTasks(filterTasksCreator(tasksList, filterQueryParam));
	}, [filterQueryParam, tasksList, dispath]);

	const filteredHandler = (type) => {
		searchParams.set('filter', type);
		setSearchParams(searchParams);
	};

	if (!tasksList || tasksList.length === 0) {
		return <h1 className="text-green-800 text-center pt-10">Create your first task!</h1>;
	}

	return (
		<>
			<HtagComponent size="h1">Your Task</HtagComponent>

			<div className="max-w-2xl mx-auto relative">
				<TasksListNav
					filteredHandler={filteredHandler}
					filteredTasks={filteredTasks}
				/>

				{filteredTasks.length === 0 ? (
					<AmptyListMessage filterQueryParam={filterQueryParam} />
				) : (
					<ul className="px-2">
						{filteredTasks?.map((task) => (
							<TaskItem
								key={task.id}
								task={task}
							/>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
export default AllTasks;
