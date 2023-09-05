/* eslint-disable react/jsx-no-bind */
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import NumResults from './components/NumResults';
import SearchInput from './components/SearchInput';
import MovieList from './components/MovieList';
import Box from './components/Box';
import Summary from './components/Summary';
import WatchedMovieList from './components/WatchedMovieList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/MovieDetails';
import { useMovies } from './hooks/useMovies';
import { useLocalStorageState } from './hooks/useLocalStorageState';

const API_KEY = '573749c0';

function PopcornApp() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query, API_KEY);
  const [watched, setWatched] = useLocalStorageState([], 'watched');

  function handleSelectMovie(id) {
    // When clicking on the active id then close it
    setSelectedId((currentId) => (id === currentId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((w) => [...w, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((w) => w.filter((currentMovie) => currentMovie.imdbID !== id));
  }
  return (
    <>
      <Navbar>
        <SearchInput query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              apiKey={API_KEY}
              onAddWatchedMovie={handleAddWatchedMovie}
              watchedMovies={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default PopcornApp;
