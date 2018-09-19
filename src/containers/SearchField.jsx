import React from 'react';
import { connect } from 'react-redux';
import { setSearchString } from '../actions';

const styles = {
  display: 'block',
  width: '80%',
  margin: '10%',
  fontSize: '30px',
  borderRadius: '4em',
  paddingLeft: '20px',
  color: 'orange',
};

const styles2 = {
  color: 'white',
  fontSize: '35px',
};

const SearchField = ({ setString }) => (
  <div>
    <h3 style={styles2}>FIND YOUR MOVIE</h3>
    <input style={styles} onChange={(evt) => { setString(evt.target.value); }} type="text" placeholder="Search movie ..." />
  </div>
);

const mapDispatchToProps = {
  setString: setSearchString,
};

const Search = connect(
  null,
  mapDispatchToProps,
)(SearchField);


export default Search;
