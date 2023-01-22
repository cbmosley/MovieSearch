import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar'
import { Button } from '@mui/material/';
import { TextField } from '@mui/material';
import { useState } from 'react'
import axios from 'axios';

export const SearchMovie = ({movies}) => {
  const [searchText, setSearchText] = useState('')
  const handleSearchMovies = (e) => {
    e.preventDefault();

    axios
      .get('')
  }
}


function App() {

  return (
    <div className="mainPage">
    <h1>FindMyMovie</h1>
      <div className="search">
      <h2>Search Movies: </h2>
        <div className="searchBar">
        <TextField id="outlined-basic" label="Lets Find That Movie!" variant="outlined" />
        <Button variant="contained">Search Movies</Button>
        </div>
      </div>
      <div className="searchResults">
        <h3>Results: </h3>
      </div>
      
    </div>
  );
}

export default App;
