import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Greetings = () => {
  const [greetingsData, setGreetingsData] = useState([]);
  const url = "http://localhost:3000/api/v1/messages";

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setGreetingsData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  console.log(greetingsData);

  return (
    <div>
      <h2>Greetings</h2>
      <p>{greetingsData.greeting}</p>
    </div>
  );
};

export default Greetings;
