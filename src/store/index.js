import { v4 as uuid } from 'uuid';
import { createStore } from 'redux';

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

export const addTask = (payload) => {
  return {
    type: 'tasks/add',
    payload: {
      id: uuid(),
      typeIndex: getTypeIndex(payload.type),
      ...payload,
    },
  };
};

export const removeTask = (payload) => {
  return {
    type: 'tasks/remove',
    payload,
  };
};

export const completeTask = (payload) => {
  return {
    type: 'tasks/complete',
    payload,
  };
};

const initialState = {
  tasks: [
    {
      id: uuid(),
      index: '0',
      nameTask: 'Testing Task no. 1',
      description: `Tempor pariatur ea velit est proident anim labore esse aliquip enim. Est adipisicing ea sunt aliqua. Irure sit ullamco consequat ex deserunt reprehenderit pariatur laborum.`,
      type: 'Medium',
      typeIndex: `1`,
    },
  ],
  completedTasks: [
    {
      id: uuid(),
      index: '1',
      nameTask: 'Testing Task no. 2',
      description: `Tempor pariatur ea velit est proident anim labore esse aliquip enim. Est adipisicing ea sunt aliqua. Irure sit ullamco consequat ex deserunt reprehenderit pariatur laborum.`,
      type: 'Medium',
      typeIndex: `1`,
    },
  ],
  freeNextIndex: '2',
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tasks/add':
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, index: `${state.tasks.length}` }],
      };
    case 'tasks/remove':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case 'tasks/complete':
      return {
        ...state,
        completedTasks: [
          ...state.completedTasks,
          ...state.tasks.filter((task) => task.id === action.payload.id),
        ],
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const store = createStore(tasksReducer);
