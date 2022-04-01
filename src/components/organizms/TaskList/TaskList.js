import React, { useState } from 'react';
import SortButton from 'components/molecues/SortButton/SortButton';
import TaskListItem from 'components/molecues/TaskListItem/TaskListItem';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Arrow, Content, Line, DropDown } from './TaskList.style';
import { completeTask, removeTask } from '../../../store';

const TaskList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);

  const tasks = useSelector((state) => state.tasks);
  const completedTasks = useSelector((state) => state.completedTasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTask({ id }));
  };

  const handleComplete = (id) => {
    dispatch(completeTask({ id }));
  };

  return (
    <>
      <SortButton />
      <DropDown onClick={() => setIsOpen(!isOpen)}>
        <Line />
        <Arrow>{isOpen ? '↓' : '↑'}</Arrow>
        <Content>Tasks ({tasks.length})</Content>
      </DropDown>
      <Wrapper isOpen={isOpen} height={tasks.length * 113}>
        {tasks.map((values) => (
          <TaskListItem
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            values={values}
            key={`${values.nameTask}${Math.random()}`}
          />
        ))}
      </Wrapper>
      <DropDown onClick={() => setIsOpen2(!isOpen2)}>
        <Line />
        <Arrow>{isOpen2 ? '↓' : '↑'}</Arrow>
        <Content>Completed Tasks ({completedTasks.length})</Content>
      </DropDown>
      <Wrapper isOpen={isOpen2} height={completedTasks.length * 113}>
        {completedTasks.map((values) => (
          <TaskListItem values={values} key={`${values.nameTask}${Math.random()}`} completedTask />
        ))}
      </Wrapper>
    </>
  );
};

export default TaskList;
