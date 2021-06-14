import React from 'react';
import CardTemplate from 'components/templates/CardTemplate/CardTemplate';
import { TitleHeader } from 'components/atoms/TitleHeader/TitleHeader';
import TaskList from 'components/organizms/TaskList/TaskList';

const ToDoList = () => {
  return (
    <CardTemplate>
      <TitleHeader>To do list</TitleHeader>
      <TaskList />
    </CardTemplate>
  );
};

export default ToDoList;
