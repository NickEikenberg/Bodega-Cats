const CatsIndex = (props) => {
<<<<<<< HEAD


  const showEdit = () => {
    let editForm = document.querySelector('div.hide')
    let editBtn = document.querySelector('span')
    editForm.classList.remove('hide')
    editForm.classList.add('show')
    editBtn.className = 'hide'
  }
=======
  // const showEdit = () => {
  //   let editForm = document.getElement('div')
  //   let editBtn = document.getElementById('edit-btn')
  //   editForm.className = 'show'
  //   editBtn.className = 'hide'
  // }
>>>>>>> f98dcf4caa26c52a9e0b4bb247e51b58c7c4fb7f

  return (
    <section>
      <ul className="catsIndex">
        {props.cats.map((cat) => {
          return (
            <li class="bodegaCat">
              <h1>{cat.date}</h1>
              <img src={cat.image} alt="Bodega Cat" />
              <br />

<<<<<<< HEAD

              <span className="show"><button  onClick={showEdit}>Edit</button><br/></span>
=======
              <button
                id="edit-btn"
                className="show"
                onClick={() => props.showCatEditForm(cat)}
              >
                Edit
              </button>
              <br />
>>>>>>> f98dcf4caa26c52a9e0b4bb247e51b58c7c4fb7f

              <div className="hide">
                <form
                  id={cat._id}
                  className="catEditForm hidden"
                  onSubmit={(event) => {
                    event.preventDefault();
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
                  <button
                    onClick={(event) => {
                      props.deletedCat(cat);
                      props.showCatEditForm(cat);
                    }}
                  >
                    Delete
                  </button>
                </form>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CatsIndex;
