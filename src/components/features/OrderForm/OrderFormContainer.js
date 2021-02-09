import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: (option) => dispatch(setOrderOption(option)),
});

const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
