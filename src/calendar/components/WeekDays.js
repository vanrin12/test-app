// @flow
import React from 'react';
import moment from 'moment';

const WeekDays = () => {
  const renderDayOfWeekCalendar = moment.weekdaysShort().map(day => {
    return (
      <div key={day} className="week-day">
        <p>{day}</p>
      </div>
    );
  });
  return <React.Fragment>{renderDayOfWeekCalendar}</React.Fragment>;
};

export default WeekDays;
