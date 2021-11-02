import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [cats, setCats] = useState([])
  const [date, setNewDate] = useState()
  const [image, setNewImage] = useState()

  const addNewImage = (event) => {
    setNewImage(event.target.value)
  }

  const addNewDate = (event) => {
    setNewDate(event.target.value)
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
        <form>
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
                <button onClick={(event) => {
                  {deletedCat(cat)}
                }}>
                </li>
            })
          }
        </ul>
      </section>
    </main>
  )
}

export default App;
