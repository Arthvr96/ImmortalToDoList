import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from 'providers/GlobalContextProvider';
import { SortButtonWrapper } from './SortButton.style';

const SortButton = () => {
  const [value, setValue] = useState('Option1');
  const { data, setData } = useContext(GlobalContext);

  useEffect(() => {
    switch (value) {
      case 'Option1':
        setData([...data].sort((a, b) => a.index - b.index));
        break;
      case 'Option2':
        setData([...data].sort((a, b) => b.index - a.index));
        break;
      case 'Option3':
        setData([...data].sort((a, b) => a.typeIndex - b.typeIndex));
        break;
      case 'Option4':
        setData([...data].sort((a, b) => b.typeIndex - a.typeIndex));
        break;
      default:
        break;
    }
    return null;
  }, [value]);

  return (
    <SortButtonWrapper>
      <label htmlFor="sort">
        <span>Sort: </span>
        <select name="sort" value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="Option1">Czas dodania ↓</option>
          <option value="Option2">Czas dodania ↑</option>
          <option value="Option3">Typ ↓</option>
          <option value="Option4">Typ ↑</option>
        </select>
      </label>
    </SortButtonWrapper>
  );
};

export default SortButton;
