import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import NewCatForm from './components/NewCatForm';
import BodegaCatsHeader from './components/BodegaCatsHeader';
import CatsIndex from './components/CatsIndex';

const App = () => {
  const [cats, setCats] = useState([]);

  const [newDate, setNewDate] = useState();
  const [newImage, setNewImage] = useState();

  const addNewImage = (event) => {
    setNewImage(event.target.value);
  };

  const addNewDate = (event) => {
    setNewDate(event.target.value);
  };

  const addNewCat = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/bodega-cats', {
        image: newImage,
        date: newDate,
      })
      .then(() => {
        axios.get('http://localhost:3000/bodega-cats').then((response) => {
          setCats(response.data);
        });
      });
  };

  const deletedCat = (event) => {
    axios.delete(`http://localhost:3000/bodega-cats/${event._id}`).then(() => {
      axios.get('http://localhost:3000/bodega-cats').then((response) => {
        setCats(response.data);
      });
    });
  };

  const editCat = (cat) => {
    axios

      .put(`http://localhost:3000/bodega-cats/${cat._id}`, {
        image: newImage || cat.image,
        date: newDate || cat.date,
      })
      .then(() => {
        axios.get('http://localhost:3000/bodega-cats').then((response) => {
          setCats(response.data);
        });
      });
  };
  useEffect(() => {
    axios.get('http://localhost:3000/bodega-cats').then((response) => {
      setCats(response.data);
    });
  }, []);

  return (
    <main>
      <>
        <BodegaCatsHeader />
      </>
      <>
        <NewCatForm
          addNewImage={addNewImage}
          addNewDate={addNewDate}
          addNewCat={addNewCat}
        />
      </>

      <>
        <CatsIndex
          cats={cats}
          editCat={editCat}
          addNewImage={addNewImage}
          addNewDate={addNewDate}
          deletedCat={deletedCat}
        />
      </>
    </main>
  );
};

export default App;
