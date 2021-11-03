const CatsIndex = (props) => {
  // const showEdit = () => {
  //   let editForm = document.getElement('div')
  //   let editBtn = document.getElementById('edit-btn')
  //   editForm.className = 'show'
  //   editBtn.className = 'hide'
  // }

  return (
    <section>
      <ul className="catsIndex">
        {props.cats.map((cat) => {
          return (
            <li class="bodegaCat">
              <h1>{cat.date}</h1>
              <img src={cat.image} alt="Bodega Cat" />
              <br />

              <button
                id="edit-btn"
                className="show"
                onClick={() => props.showCatEditForm(cat)}
              >
                Edit
              </button>
              <br />

              <div className="show">
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
