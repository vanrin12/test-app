// @flow
import React, { memo, useEffect } from 'react';
import moment from 'moment';
import WeekDays from './WeekDays';
import DateItem from './DateItem';

type Props = {
  getCalendarData: Function,
  calendars: Array<{}>,
  updateData: Function
};
const Calendar = ({ getCalendarData, calendars, updateData }: Props) => {
  useEffect(() => {
    getCalendarData();
  }, []);

  /**
   * Render list day of current week
   */
  const renderListDate = () => {
    const currentDay = moment().format('YYYY-MM-DD');
    const nthWeekOfMonth = Math.ceil(moment(currentDay).date() / 7);
    let daysIn = [];
    let numberDays = [];

    for (let d = nthWeekOfMonth * 7 - 6; d <= nthWeekOfMonth * 7 + 1; d++) {
      calendars &&
        calendars.forEach(todo => {
          const dateTodo = moment(todo && todo.date).format('D');

          if (parseInt(dateTodo) === d) {
            numberDays.push(d);
            daysIn.push(
              <DateItem
                date={d}
                todo={todo}
                onDayClick={() => {}}
                updateData={updateData}
              />
            );
          }
        });
      if (!numberDays.includes(d)) {
        numberDays.push(d);
        daysIn.push(
          <DateItem date={d} onDayClick={() => {}} updateData={updateData} />
        );
      }
    }

    return daysIn;
  };

  return (
    <React.Fragment>
      <h1>Calendar Todo list</h1>
      <div className="calendar-page">
        <div className="rows d-flex">
          <WeekDays />
        </div>
        <div className="rows d-flex">{renderListDate()}</div>
      </div>
    </React.Fragment>
  );
};

export default memo<Props>(Calendar);
