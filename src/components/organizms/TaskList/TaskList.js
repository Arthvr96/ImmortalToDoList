import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'providers/GlobalContextProvider';
import SortButton from 'components/molecues/SortButton/SortButton';
import TaskListItem from 'components/molecues/TaskListItem/TaskListItem';
import { Wrapper } from './TaskList.style';

const DropDown = styled.button`
  display: block;
  position: relative;
  width: 85vw;
  background-color: transparent;
  border: unset;
  margin: 2rem 0 2.5rem 1rem;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black};
  left: 0;
  top: -2px;
`;

const Arrow = styled.span`
  display: block;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  right: -1px;
  top: -12px;
`;

const Content = styled.span`
  display: block;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  left: 50%;
  transform: translateX(calc(-50% - 10px));
  top: -10px;
`;

const TaskList = () => {
  const { data, compliteTasks, handleDelete, handleComplite } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <>
      <SortButton />
      <DropDown onClick={() => setIsOpen(!isOpen)}>
        <Line />
        <Arrow>{isOpen ? '↓' : '↑'}</Arrow>
        <Content>Tasks ({data.length})</Content>
      </DropDown>
      <Wrapper isOpen={isOpen} height={data.length * 113}>
        {data.map((values) => (
          <TaskListItem
            handleDelete={handleDelete}
            handleComplite={handleComplite}
            values={values}
            key={`${values.nameTask}${Math.random()}`}
          />
        ))}
      </Wrapper>
      <DropDown onClick={() => setIsOpen2(!isOpen2)}>
        <Line />
        <Arrow>{isOpen2 ? '↓' : '↑'}</Arrow>
        <Content>Complite Tasks ({compliteTasks.length})</Content>
      </DropDown>
      <Wrapper isOpen={isOpen2} height={compliteTasks.length * 113}>
        {compliteTasks.map((values) => (
          <TaskListItem values={values} key={`${values.nameTask}${Math.random()}`} compliteTasks />
        ))}
      </Wrapper>
    </>
  );
};

export default TaskList;
