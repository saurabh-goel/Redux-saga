import React from 'react';
import Search from '../containers/SearchField';
import ButtonSort from '../containers/ButtonSort';
import ButtonSearch from '../containers/ButtonSearch';

const spanStyle = {
  fontSize: '22px',
  color: 'orange',
};

const SearchArea = () => (
  <div style={{
 backgroundColor: 'grey', border: '3px solid red', margin: '50px', padding: '15px',
}}>
    <Search />
    <span style={spanStyle}>SEARCH BY</span>
    <ButtonSort>Title</ButtonSort >
    <ButtonSort>Genre</ButtonSort >
    <ButtonSearch >Search</ButtonSearch>
  </div>
);

export default SearchArea;
