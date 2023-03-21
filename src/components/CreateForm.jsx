import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTaskAction } from '../reduxToolkit/tasksSlice';
import ButtonComponent from './ui-components/ButtonComponent';
import InputComponent from './ui-components/InputComponent';

const CreateForm = () => {
	const [currentTextValue, setCurrentTextValue] = useState('');
	const dispatch = useDispatch();

	const changeTextFieldHandler = (e) => {
		setCurrentTextValue(e.target.value);
	};

	const createTaskClickHandler = () => {
		dispatch(createTaskAction(currentTextValue));
		setCurrentTextValue('');
	};

	return (
		<form
			className="max-w-2xl mx-auto"
			onSubmit={(e) => e.preventDefault()}
		>
			<InputComponent
				inputCangeHandler={changeTextFieldHandler}
				placeholder={'Pleace writing task...'}
				valueProps={currentTextValue}
			/>

			<ButtonComponent
				isDisabled={!currentTextValue}
				buttonClickHandler={createTaskClickHandler}
			>
				Create Task
			</ButtonComponent>
		</form>
	);
};

export default CreateForm;
