import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/ButtonStyled';
import { requestPosts } from '../actions';

const ButtonSearch = ({ searchString, searchRequest }) => (
  <Button onClick={() => { searchRequest(searchString); console.log(searchString); }} style={{ marginRight: '200px' }} round primary>SEARCH</Button>
);

ButtonSearch.propTypes = {
  // children: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  searchString: state.string,
});

const mapDispatchToProps = {
  searchRequest: requestPosts,
};

const But = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonSearch);

ButtonSearch.propTypes = {
  searchString: PropTypes.string,
  searchRequest: PropTypes.func.isRequired,
};

ButtonSearch.defaultProps = {
  searchString: '',
};


export default But;
