// @flow
import React, { memo } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

type Props = {
  onDayClick: Function,
  date: number,
  todo: Object,
  updateData: Function
};

const DateItem = ({ onDayClick, date, updateData, todo }: Props) => {
  const handleDragStart = (e, dateSource, id) => {
    e.dataTransfer.setData('dateSource', dateSource);
    e.dataTransfer.setData('id', id);
  };

  const onDrop = (ev, dateTarget) => {
    let dateSource = ev.dataTransfer.getData('dateSource');
    let id = ev.dataTransfer.getData('id');
    updateData(dateSource, dateTarget, id);
  };

  const onDragOver = ev => {
    ev.preventDefault();
  };

  const renderGroupTodo =
    todo &&
    todo.groups &&
    todo.groups.map(item => {
      return (
        <div
          className="group-todo"
          onDragStart={e => handleDragStart(e, date, item.id)}
          onDragOver={e => onDragOver(e)}
          draggable
        >
          <p className="overflow title-todo">{item && item.title}</p>
          {item &&
            item.todoList &&
            item.todoList.map(item => {
              return (
                <div className="todo-item">
                  <p className="todo-name overflow">{item.name}</p>
                  <p className="todo-info-wrapper">
                    <span className="todo-quantity">{`${item.quantity}X`}</span>
                    <span className="todo-info">{item.info}</span>
                  </p>
                </div>
              );
            })}
          <div className="wrapper-plus-btn">
            <Button>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </div>
      );
    });
  const currentDay = moment().format('D');

  return (
    <div
      onClick={e => {
        onDayClick(e, date);
      }}
      className={`date-item ${
        parseInt(currentDay) === parseInt(date) ? 'current-date' : ''
      }`}
      onDrop={e => onDrop(e, date)}
      onDragOver={e => onDragOver(e)}
    >
      {date}

      {renderGroupTodo}
    </div>
  );
};

export default memo<Props>(DateItem);
