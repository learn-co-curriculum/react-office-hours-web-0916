import React from 'react';
import ReactDOM from 'react-dom';
import MoviePage from './components/MoviePage'

function App (props) {
  return(
    <div>
      <MoviePage />
    </div>)
}

ReactDOM.render(< App />, document.getElementById('container'));
