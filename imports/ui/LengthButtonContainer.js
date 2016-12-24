import { connect } from 'react-redux'
import { addToScore } from '../../client/actions'
import LengthButton from './LengthButton';


const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: (event) => {
			dispatch(addToScore(event.target.name));
		}
	}
}

const LengthButtonContainer = connect(
	null,
  mapDispatchToProps
)(LengthButton)

export default LengthButtonContainer