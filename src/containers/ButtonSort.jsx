import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/ButtonStyled';

const ButtonSort = ({ children }) => (

  <Button round onClick={() => { console.log('sort Cklicked'); }} >{children}</Button>

);

ButtonSort.propTypes = {
  children: PropTypes.string.isRequired,
};


export default ButtonSort;
