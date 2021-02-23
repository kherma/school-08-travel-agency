import { connect } from 'react-redux';

import PhoneNumber from './PhoneNumber';

import { getAll } from '../../../redux/phonesRedux';

const mapStateToProps = (state) => ({
  phones: getAll(state),
});

export default connect(mapStateToProps)(PhoneNumber);
