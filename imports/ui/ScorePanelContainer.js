import { connect } from 'react-redux'
import { clearScore } from '../../client/actions'
import ScorePanel from './ScorePanel'


const mapStateToProps = (state) => {
	return {
		values : state.values,
		total : state.total,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClickClear: (event) => {
			dispatch(clearScore());
		}
	}
}

const ScorePanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScorePanel)

export default ScorePanelContainer