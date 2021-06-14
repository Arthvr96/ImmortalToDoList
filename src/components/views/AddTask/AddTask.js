import React from 'react';
import CardTemplate from 'components/templates/CardTemplate/CardTemplate';
import { TitleHeader } from 'components/atoms/TitleHeader/TitleHeader';
import FormAddNewTask from 'components/organizms/FormAddNewTask/FormAddNewTask';

const AddTask = () => {
  return (
    <CardTemplate>
      <TitleHeader>Add new Task !</TitleHeader>
      <FormAddNewTask />
    </CardTemplate>
  );
};

export default AddTask;
