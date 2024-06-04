
import React from 'react';

const GenreFilter = ({ genres, onGenreSelect }) => {
  return (
    <div className='genre-div test-border'>
      <h2>Filter by Genre</h2>
      {genres.map((genre, index) => (
        <button className='button' key={index} onClick={() => onGenreSelect(genre)}>{genre}</button>
      ))}
    </div>
  );
};

export default GenreFilter;
