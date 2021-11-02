import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

const newfunction = () => 2 + 4

const App = () => {
  const [cats, setCats] = useState([])
  const [newDate, setNewDate] = useState()
  const [newImage, setNewImage] = useState()

  const addNewImage = (event) => {
    setNewImage(event.target.value)
  }

  const addNewDate = (event) => {
    setNewDate(event.target.value)
  }

  const addNewCat = (event) => {
    event.preventDefault()
    axios.post(
      'http://localhost:3000/bodega-cats',
      {
        image: newImage,
        date: newDate
      }
    ).then(() => {
      axios
        .get('http://localhost:3000/bodega-cats')
        .then((response) => {
          setCats(response.data)
        })
    })
  }

  const deletedCat = (event) => {
    axios
      .delete(
        `http://localhost:3000/bodega-cats/${event._id}`
      ).then (() => {
        axios
          .get('http://localhost:3000/bodega-cats')
          .then((response) => {
            setCats(response.data)
        })
      })
  }

  const editCat = (cat) => {
    axios
      .delete(
        `http://localhost:3000/bodega-cats/${cat._id}`
      ).then(() => {
        axios
          .get('http://localhost:3000/bodega-cats')
          .then((response) => {
            setCats(response.data)
        })
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/bodega-cats')
      .then((response) => {
        setCats(response.data)
      })
  })

  return(
    <main>
      <h1>Bodega Cats</h1>
      <section>
        <h2>Submit New Bodega Cat</h2>
        <form onSubmit={addNewCat}>
          Image: <input type="text" onChange={addNewImage}/><br/><br/>
          Date: <input type="text" onChange={addNewDate}/><br/><br/>
          <input type="submit"/>
        </form>
      </section>
      <section>
        <h2>Cats</h2>
        <ul>
          {
            cats.map((cat) => {
              return <li>
                <img src={cat.image} /><br/>
                {cat.date}
                <form onSubmit={(event) => {editCat(cat)}}>
                  Image: <input type="text" onChange={addNewImage} placeholder={cat.image}/><br/>
                  Date: <input type="text" onChange={addNewDate} placeholder={cat.date}/><br/>
                  <input type="submit" value="Submit Changes"/>
                </form>
                <button onClick={(event) => {deletedCat(cat)}}>Delete</button>
                </li>
            })
          }
        </ul>
      </section>
    </main>
  )
}

export default App;
