export const ADD_TO_SCORE = 'ADD_TO_SCORE';
export function addToScore(value){
  return {
    type : ADD_TO_SCORE,
    value : value
  }
}

export const CLEAR_SCORE = 'CLEAR_SCORE';
export function clearScore(){
  return {
    type : CLEAR_SCORE
  }
}