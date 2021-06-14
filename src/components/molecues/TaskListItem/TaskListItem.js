import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { ButtonReadMore } from 'components/atoms/ButtonReadMore/ButtonReadMore';
import { Title } from 'components/atoms/Title/Title';
import { Description } from 'components/atoms/Description/Description';
import { Wrapper, ButtonsWrapper } from './TaskListItem.style';

const TaskListItem = ({
  values: { nameTask, description, type, index },
  handleDelete,
  handleComplite,
  compliteTasks,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('');

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSetColor = () => {
    switch (type) {
      case 'Easy':
        setColor('#8ce384');
        break;
      case 'Medium':
        setColor('#e0e384');
        break;
      case 'Hard':
        setColor('#e3b284');
        break;
      case 'HardAsFuck':
        setColor('#e38484');
        break;
      default:
    }
  };

  useEffect(() => {
    handleSetColor();
  }, []);

  return (
    <Wrapper color={compliteTasks ? '#949494' : color}>
      <div>
        <Title>{nameTask}</Title>
        <Description isOpen={isOpen}>{description}</Description>
        <ButtonReadMore onClick={handleOpen}>
          {isOpen ? 'Read less..' : 'Read more..'}
        </ButtonReadMore>
      </div>
      {!compliteTasks ? (
        <ButtonsWrapper>
          <Button onClick={(e) => handleComplite(index)} bg="green">
            ✔
          </Button>
          <Button onClick={(e) => handleDelete(index)} bg="red">
            x
          </Button>
        </ButtonsWrapper>
      ) : null}
    </Wrapper>
  );
};

export default TaskListItem;

TaskListItem.propTypes = {
  values: PropTypes.shape({
    nameTask: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    index: PropTypes.string,
  }),
  handleDelete: PropTypes.func,
  handleComplite: PropTypes.func,
  compliteTasks: PropTypes.bool,
};
