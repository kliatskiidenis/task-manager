import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="flex justify-between items-center mb-2 px-3 py-3 border-b-2 via-gray-500">
			<a
				className="font-bold text-3xl text-green-700"
				href="/"
			>
				Tasks Manager
			</a>

			<nav>
				<ul className="inline-flex gap-9 text-gray-500 font-semibold">
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-green-700 underline' : 'text-gray-400'
							}
							to="/add-task"
						>
							Create New Tasks
						</NavLink>
					</li>

					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-green-700 underline' : 'text-gray-400'
							}
							to="/all-tasks"
						>
							All Tasks
						</NavLink>
					</li>

					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-green-700 underline' : 'text-gray-400'
							}
							to="/"
						>
							About Project
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
