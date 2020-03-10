// import libs
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { data } from 'mockData';
import moment from 'moment';
import _ from 'lodash';

// Define action creators
export const { Types, Creators } = createActions({
  getCalendarData: null,
  updateData: ['dateSource', 'dateTarget', 'id']
});

// Initial state
export const INITIAL_STATE = Immutable({
  calendars: []
});

const getCalendarData = (state, action) => {
  return state.merge({
    type: action.type,
    calendars: data.calendars
  });
};

const updateData = (state, action) => {
  const { dateSource, dateTarget, id } = action;

  let temp;

  const source =
    state.calendars &&
    state.calendars.map((calendar, index) => {
      const groupDate = moment(calendar.date).format('D');

      if (groupDate === dateSource) {
        temp = calendar.groups.find(item => parseInt(item.id) === parseInt(id));
        const groupsRemoved = calendar.groups.filter(
          item => parseInt(item.id) !== parseInt(id)
        );

        return {
          ...state.calendars[index],
          date: calendar.date,
          groups: groupsRemoved
        };
      }

      return {
        ...state.calendars[index],
        date: calendar.date,
        groups: calendar.groups
      };
    });

  let target = [];
  let isContainer = false;
  state.calendars.forEach(element => {
    if (parseInt(moment(element.date).format('D')) === parseInt(dateTarget)) {
      isContainer = true;
      target =
        state.calendars &&
        state.calendars.map((calendar, index) => {
          const groupDate = moment(calendar.date).format('D');

          if (parseInt(dateTarget) === parseInt(groupDate)) {
            const groupDrop = calendar.groups.concat(temp);

            return {
              ...state.calendars[index],
              date: calendar.date,
              groups: groupDrop
            };
          }

          return {
            ...state.calendars[index],
            date: calendar.date,
            groups: calendar.groups
          };
        });
    } else {
      const currentYear = moment().format('YYYY');
      const currentMonth = moment().format('MM');
      isContainer = false;

      target = [
        ...state.calendars,
        {
          date: `${currentYear}-${currentMonth}-${dateTarget}`,
          groups: [temp]
        }
      ];
    }
  });

  const calendarSource = source.filter(
    item =>
      parseInt(moment(item && item.date).format('D')) === parseInt(dateSource)
  );
  const calendarTarget = isContainer
    ? target.filter(
        item =>
          parseInt(moment(item && item.date).format('D')) ===
          parseInt(dateTarget)
      )
    : target;

  const listCalendars = _.unionBy(calendarSource, calendarTarget, 'date');
  return state.merge({
    type: action.type,
    calendars: listCalendars
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.GET_CALENDAR_DATA]: getCalendarData,
  [Types.UPDATE_DATA]: updateData
};

// Create reducers by pass state and handlers
export const calendarReducer = createReducer(INITIAL_STATE, HANDLERS);
