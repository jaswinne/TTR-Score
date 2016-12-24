import {ADD_TO_SCORE, CLEAR_SCORE} from './actions.js'

const reducer = (state = {
              values: [],
              total: 0
            }, action) => {


            switch (action.type) {
              case ADD_TO_SCORE: 
                const newV = [...state.values, action.value];
                var total = 0;
                newV.forEach((value) => {
                  total += Number(value);
                })
                return Object.assign(
                  {}, 
                  state, 
                  {
                    values: newV,
                    total: total
                  }
                );

              case CLEAR_SCORE:
                return Object.assign(
                  {}, 
                  state, 
                  {
                    values: [],
                    total: 0
                  }
                );
 
              default:
                return state;
            }
}

export default reducer