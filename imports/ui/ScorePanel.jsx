
import React, { Component, PropTypes } from 'react';


const ScorePanel = ({total, values, handleClickClear}) =>(

      <div id='lengths'>
        <span className='h2 center'>{total}</span>
        <button className='btn btn-danger pull-right col-xs-4' id='clearclick' onClick={handleClickClear}>
          Clear
        </button>
      </div>
  );


export default ScorePanel;