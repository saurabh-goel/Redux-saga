import React from 'react';
import PropTypes from 'prop-types';
import Picture from './PictureStyled';

const NewsItem = ({ movies }) => (
  <article >
    <div className="article-wrapper">
      <Picture src={movies.poster_path} alt="" />
      <h3 className="text-center">{movies.title}</h3>
      <p className="text-center">{movies.release_date}</p>
      <h5>{movies.genres.join(' & ')}</h5>
    </div>
  </article>
);

NewsItem.propTypes = {
  movies: PropTypes.shape([]),
};
NewsItem.defaultProps = {
  movies: null,
};

export default NewsItem;

