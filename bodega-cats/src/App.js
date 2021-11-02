import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import NewCatForm from './components/NewCatForm';
import BodegaCatsHeader from './components/BodegaCatsHeader';

const App = () => {
  const [cats, setCats] = useState([]);
  const [date, setNewDate] = useState();
  const [image, setNewImage] = useState();

  const addNewImage = (event) => {
    setNewImage(event.target.value);
  };

  const addNewDate = (event) => {
    setNewDate(event.target.value);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/bodega-cats').then((response) => {
      setCats(response.data);
    });
  });

  return (
    <main>
      <>
        <BodegaCatsHeader />
      </>
      <>
        <NewCatForm addNewImage={addNewImage} addNewDate={addNewDate} />
      </>
      <section>
        <h2>Cats</h2>
        <ul>
          {cats.map((cat) => {
            return (
              <li>
                <img src={cat.image} alt="Bodega Cat" />
                <br />
                {cat.date}
                <button onClick={(event) => {}}>Delete</button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default App;
