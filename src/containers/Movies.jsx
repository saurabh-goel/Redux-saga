import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
import NewsItem from '../components/MovieItem';

const Movies = ({ moviesArray, loading }) => {
  let movies = '';

  if (moviesArray) {
    movies = moviesArray.map((article, index) =>
      (
        <div key={`${index}`} className="row">
          <NewsItem movies={moviesArray[index]} />
        </div>
      ));
  }
  if (loading) {
    movies = <h3 className="loading-indicator">Loading ...</h3>;
  }

  return (
    <div>
      {movies}
    </div>
  );
};

const mapStateToProps = state => ({
  moviesArray: state.json,
  loading: state.loading,
});

const MoviesConnect = connect(
  mapStateToProps,
  null,
)(Movies);

export default MoviesConnect;

