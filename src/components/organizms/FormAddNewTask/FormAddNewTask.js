import React, { useState, useContext } from 'react';
import { GlobalContext } from 'providers/GlobalContextProvider';
import PopUpAlert from 'components/molecues/PopUpAlert/PopUpAlert';
import { Formik } from 'formik';
import FieldText from 'components/molecues/FieldText/FieldText';
import FieldTextArea from 'components/molecues/FieldTextArea/FieldTextArea';
import FieldSelect from 'components/molecues/FieldSelect/FieldSelect';
import { ATCButton } from 'components/atoms/ATCButton/ATCButton';
import { StyledForm } from './FormAddNewTask.style';

const options = ['Easy', 'Medium', 'Hard', 'HardAsFuck'];

const FormAddNewTask = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { handleSetData } = useContext(GlobalContext);

  const initialValues = {
    nameTask: '',
    description: '',
    type: 'Easy',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    handleSetData(values);
    setIsVisible(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setIsVisible(false);
      resetForm();
    }, 1300);
  };

  return (
    <>
      <PopUpAlert message="You added new task !" isVisible={isVisible} />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FieldText
              value={values.nameTask}
              handleChange={handleChange}
              name="nameTask"
              label="Task name :"
            />
            <FieldTextArea
              value={values.description}
              handleChange={handleChange}
              name="description"
              label="Description :"
              maxLength="150"
            />
            <FieldSelect
              value={values.type}
              handleChange={handleChange}
              name="type"
              label="Type of task :"
              options={options}
            />
            <ATCButton type="submit" disabled={isSubmitting}>
              Submit
            </ATCButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default FormAddNewTask;
