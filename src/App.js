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
    setJokes([...jokes, new joke(like, dislike)]);
    setlike(false);
    setDislike(false);
    newJoke();
  };

  const handleLike = () => {
    setlike(!like);
    setDislike(false);
  };
  const handleDislike = () => {
    setDislike(!dislike);
    setlike(false);
  };

  return (
    <div className="App">
      <p>{data.value}</p>
      <Button variant="contained" onClick={handleClick}>
        New joke
      </Button>
      <div className="thumbsWrapper">
        <div className="thumbUpWrapper">
          <ThumbUpIcon className="thumbUpIcon" onClick={handleLike} />
          <p>{like ? 1 : 0}</p>
        </div>
        <div className="thumbsDownWrapper">
          <ThumbDownIcon className="thumbDownIcon" onClick={handleDislike} />
          <p>{dislike ? 1 : 0}</p>
        </div>
      </div>
      <p>
        You liked:
        {
          jokes.filter((e) => {
            return e.like;
          }).length
        }
      </p>
      <p>
        You disliked:
        {
          jokes.filter((e) => {
            return e.dislike;
          }).length
        }
      </p>
    </div>
  );
}

export default App;
