import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = React.createContext({
  data: [],
  setData: () => {},
  height: '',
  handleSetData: () => {},
  handleDelete: () => {},
  handleComplite: () => {},
});

const initialStateData = (number) => {
  const state = [];
  for (let i = 0; i < number; i += 1) {
    state.push({
      index: `${i}`,
      nameTask: `Testing Task no.${i + 1}`,
      description: `Tempor pariatur ea velit est proident anim labore esse aliquip enim. Est adipisicing ea sunt aliqua. Irure sit ullamco consequat ex deserunt reprehenderit pariatur laborum.`,
      type: `${i % 2 ? 'Easy' : i % 3 ? 'Medium' : 'Hard'}`,
      typeIndex: `${i % 2 ? '0' : i % 3 ? '1' : '2'}`,
    });
  }
  return state;
};

const getTypeIndex = (type) => {
  switch (type) {
    case 'Easy':
      return 0;
    case 'Medium':
      return 1;
    case 'Hard':
      return 2;
    case 'HardAsFuck':
      return 3;
    default:
      break;
  }
  return null;
};

const GlobalContextProvider = ({ children }) => {
  const [freeNextIndex, setFreeNextIndex] = useState(0);
  const [data, setData] = useState(initialStateData(6));
  const [compliteTasks, setCompliteTasks] = useState([]);
  const [height, setHeight] = useState(window.innerHeight);

  const handleSetData = (obj) => {
    const newTask = obj;
    newTask.index = `${freeNextIndex}`;
    setFreeNextIndex(freeNextIndex + 1);
    newTask.typeIndex = getTypeIndex(newTask.type);
    setData([...data, obj]);
  };

  const handleDelete = (itemIndex) => {
    const array = data.filter((obj) => {
      return obj.index !== itemIndex;
    });
    setData([...array]);
  };

  const handleComplite = (itemIndex) => {
    data.forEach((item) => {
      if (item.index === itemIndex) {
        setCompliteTasks([...compliteTasks, item]);
        handleDelete(itemIndex);
      }
    });
  };

  const handleResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <GlobalContext.Provider
      value={{ data, setData, compliteTasks, handleSetData, handleDelete, handleComplite, height }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
