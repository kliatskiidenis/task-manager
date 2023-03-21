export const dateCreator = (dateProps) => {
	const day = dateProps.getDate();
	const correctDay = day.toString().length === 1 ? `0${day}` : day;
	const month = dateProps.getMonth();
	const correctMonth = month.toString().length === 1 ? `0${month}` : month;
	const year = dateProps.getFullYear();
	const hours = dateProps.getHours();
	const minutes = dateProps.getMinutes();

	return `${correctDay}.${correctMonth}.${year}, ${hours}:${minutes}`;
};

export const filterTasksCreator = (tasks, key) => {
	const temp = [...tasks];

	if (!key) {
		return temp;
	}

	if (key === 'completed') {
		return temp.filter((task) => task.completed === true);
	} else if (key === 'important') {
		return temp.filter((task) => task.important === true);
	} else {
		return temp;
	}
};
