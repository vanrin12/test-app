import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components';

import { Creators } from '../redux';

const mapStateToProps = state => {
  return {
    calendars: state.calendarReducer.calendars,
    container: state.calendarReducer.container
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Creators,
      getCalendarData: Creators.getCalendarData,
      updateData: Creators.updateData,
      addTodo: Creators.addTodo,
      setContainerAddTodo: Creators.setContainerAddTodo,
      addContainer: Creators.addContainer
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
