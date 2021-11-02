const CatsIndex = (props) => {


  const showEdit = () => {
    let editForm = document.querySelector('div.hide')
    let editBtn = document.querySelector('span')
    editForm.classList.remove('hide')
    editForm.classList.add('show')
    editBtn.className = 'hide'
  }

  return (
    <section>
      <h2>Cats</h2>
      <ul>
        {props.cats.map((cat) => {
          return (
            <li>
              {console.log(cat.image)}
              <img src={cat.image} alt="Bodega Cat" />
              <br />
              {cat.date}
              <br />


              <span className="show"><button  onClick={showEdit}>Edit</button><br/></span>

              <div className="hide">
                <form
                  id={cat._id}
                  onSubmit={(event) => {
                    event.preventDefault()
                    props.editCat(cat);
                  }}
                >
                  Image:{' '}
                  <input
                    type="text"
                    onChange={props.addNewImage}
                    placeholder={cat.image}
                  />
                  <br />
                  Date:{' '}
                  <input
                    type="text"
                    onChange={props.addNewDate}
                    placeholder={cat.date}
                  />
                  <br />
                  <input type="submit" value="Submit Changes" />
                </form>
              </div>

              <button
                onClick={(event) => {
                  props.deletedCat(cat);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CatsIndex;
