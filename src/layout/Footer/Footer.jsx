import PtagComponent from '../../components/PtagComponent';

const Footer = () => {
	return (
		<>
			<footer className="text-center py-3">
				<PtagComponent size="sm">
					&copy; {new Date().getFullYear()} Demonstration Aplication
				</PtagComponent>
			</footer>
		</>
	);
};

export default Footer;
