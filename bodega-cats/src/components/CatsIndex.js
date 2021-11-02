const CatsIndex = (props) => {
<<<<<<< HEAD
  // const showEdit = () => {
  //   let editForm = document.getElementById('edit-form')
  //   let editBtn = document.getElementById('edit-btn')
  //   editForm.className = 'show'
  //   editBtn.className = 'hide'
  // }
=======

>>>>>>> a6d38966e84108d725aa992d39a95ca88e4dde09

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

<<<<<<< HEAD
              <button id="edit-btn" className="show">
                Edit
              </button>
              <br />
=======

              <button id="edit-btn" className="show">Edit</button><br/>
>>>>>>> a6d38966e84108d725aa992d39a95ca88e4dde09

              <form
                id={cat._id}

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
              </form>
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
