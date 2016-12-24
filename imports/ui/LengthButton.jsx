import React, { Component, PropTypes } from 'react';


const LengthButton = ({length, value, handleClick}) =>(

    <button className='btn btn-primary col-xs-12'onClick={handleClick} name={value}>{length}</button>
	);


export default LengthButton;