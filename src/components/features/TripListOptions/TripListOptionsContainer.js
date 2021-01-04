import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeTags,
  changeDuration,
} from '../../../redux/filtersRedux';

const mapStateToProps = (state) => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: (phrase) => dispatch(changeSearchPhrase(phrase)),
  changeDuration: (duration) => dispatch(changeDuration(duration)),
  changeTags: (tags) => dispatch(changeTags(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
