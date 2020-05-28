import { connect } from 'react-redux';
import Content from '../../components/Content';

const mapStateToProps = (state) => {
  const {
    filteredRestaurants,
  } = state;
  return {
    filteredRestaurants,
  };
};

const ContentContainer = connect(mapStateToProps, null)(Content);

export default ContentContainer;
