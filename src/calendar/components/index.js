// @flow
import React, { memo, useEffect, useState } from 'react';
import moment from 'moment';
import WeekDays from './WeekDays';
import CalendarItem from './CalendarItem';
import ModalPrimary from 'components/Modal';
import FormAddTodo from './FormAddTodo';
import FormAddContainer from './FormAddContainer';

type Props = {
  getCalendarData: Function,
  calendars: Array<{}>,
  updateData: Function,
  addTodo: Function,
  setContainerAddTodo: Function,
  container: Object,
  addContainer: Function
};

const Calendar = ({
  getCalendarData,
  calendars,
  updateData,
  addTodo,
  setContainerAddTodo,
  container,
  addContainer
}: Props) => {
  const [isOpenAddTodo, setIsOpenAddTodo] = useState(false);
  const [isOpenAddContainer, setIsOpenAddContainer] = useState(false);
  const [dateClicking, setDateClicking] = useState(null);

  useEffect(() => {
    getCalendarData();
  }, []);

  const handleAddExcercise = (date, groupIndex, event) => {
    event.stopPropagation();
    setIsOpenAddTodo(true);
    setContainerAddTodo({ date, groupIndex });
  };

  const handleCloseModal = () => {
    setIsOpenAddTodo(false);
  };

  const handleClickDay = day => {
    setIsOpenAddContainer(true);
    setDateClicking(day);
  };

  /**
   * Render list day of current week
   */
  const renderListDate = () => {
    const currentDay = moment().format('YYYY-MM-DD');
    const nthWeekOfMonth = Math.ceil(moment(currentDay).date() / 7);
    let daysIn = [];
    let numberDays = [];

    for (let d = nthWeekOfMonth * 7 - 6; d <= nthWeekOfMonth * 7; d++) {
      calendars &&
        calendars.forEach(todo => {
          const dateTodo = moment(todo && todo.date).format('D');

          if (parseInt(dateTodo) === d) {
            numberDays.push(d);
            daysIn.push(
              <CalendarItem
                date={d}
                todo={todo}
                onDayClick={handleClickDay}
                updateData={updateData}
                handleAddExcercise={handleAddExcercise}
              />
            );
          }
        });

      if (!numberDays.includes(d)) {
        numberDays.push(d);
        daysIn.push(
          <CalendarItem
            date={d}
            onDayClick={handleClickDay}
            updateData={updateData}
            handleAddExcercise={handleAddExcercise}
          />
        );
      }
    }

    return daysIn;
  };

  return (
    <React.Fragment>
      <h1>Calendar Test</h1>
      <div className="calendar-page">
        <div className="rows d-flex">
          <WeekDays />
        </div>
        <div className="rows d-flex">{renderListDate()}</div>
      </div>
      <ModalPrimary
        title="Add New Todo"
        content={
          <FormAddTodo
            addTodo={addTodo}
            container={container}
            handleCloseModal={handleCloseModal}
          />
        }
        isOpen={isOpenAddTodo}
        handleClose={() => {
          setIsOpenAddTodo(false);
        }}
      />

      <ModalPrimary
        title="Add Group Todo"
        content={
          <FormAddContainer
            addContainer={addContainer}
            dateClicking={dateClicking}
            handleCloseModal={() => {
              setIsOpenAddContainer(false);
            }}
          />
        }
        isOpen={isOpenAddContainer}
        handleClose={() => {
          setIsOpenAddContainer(false);
        }}
      />
    </React.Fragment>
  );
};

export default memo<Props>(Calendar);
