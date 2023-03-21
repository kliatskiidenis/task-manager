import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Preloader from '../components/ui-components/Preloader';
import DialogModal from '../components/ui-components/DialogModal';

const Layout = () => {
	const { isLoading, error, deletedData } = useSelector((state) => state.tasks);
	const { isOpenDialogModal } = deletedData;

	return (
		<>
			{isLoading && <Preloader />}
			{error && <h1 className="text-red-500 font-bold">{error}</h1>}

			<div className="max-w-screen-lg mx-auto flex flex-col min-h-screen">
				<Header />

				<main className="grow">
					<Outlet />
				</main>
				<Footer />
			</div>

			{isOpenDialogModal ? <DialogModal /> : null}
		</>
	);
};

export default Layout;
