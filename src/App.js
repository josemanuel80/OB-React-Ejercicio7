import { useEffect, useState } from 'react';
import './App.css';
import { joke } from './model/joke.class';
import axios from 'axios';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function App() {
  const [data, setData] = useState('');
  const [jokes, setJokes] = useState([]);
  const [like, setlike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const newJoke = async () => {
    return await axios
      .get('https://api.chucknorris.io/jokes/random')
      .then((e) => setData(e.data));
  };

  useEffect(() => {
    newJoke();
  }, []);

  const handleClick = () => {
    setJokes([...jokes, { id: data.id, like: like, dislike: dislike }]);
    newJoke();
  };
  console.log(jokes);
  return (
    <div className="App">
      <p>{data.value}</p>
      <Button variant="contained" onClick={handleClick}>
        Joke
      </Button>
      <ThumbUpIcon />
      <ThumbDownIcon />
    </div>
  );
}

export default App;
