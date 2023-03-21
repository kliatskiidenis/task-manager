import HtagComponent from '../components/HtagComponent';
import PtagComponent from '../components/PtagComponent';

const AboutProject = () => {
	return (
		<>
			<HtagComponent size="h1">About this Project</HtagComponent>

			<div className="max-w-2xl mx-auto">
				<PtagComponent size="lg">
					Tasks Manager is a demo application. Created as part of a portfolio showing the ability to
					use FrontEnd development technologies.
				</PtagComponent>

				<PtagComponent size="lg">
					This is an example of a full-fledged Single Page Application with getting and writing data
					to the database, with routing through pages, with sorting components on the page.
				</PtagComponent>

				<HtagComponent size="h2">Such technologies were used:</HtagComponent>

				<ul className="pl-10 list-disc pt-3">
					<li>React</li>
					<li>React Router</li>
					<li>Redux Toolkit</li>
					<li>Async Thunk</li>
					<li>Axios</li>
					<li>Tailwind CSS</li>
				</ul>
			</div>
		</>
	);
};

export default AboutProject;
