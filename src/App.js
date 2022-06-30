import { useEffect, useState } from 'react';
import './App.css';
import { joke } from './model/joke.class';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
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

  console.log(data);
  return (
    <div className="App">
      <p>{data.value}</p>
    </div>
  );
}

export default App;
