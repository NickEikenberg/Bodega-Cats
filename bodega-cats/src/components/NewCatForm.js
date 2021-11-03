const NewCatForm = (props) => {
  return (
    <section className="newBodegaCatModal">
      <h2>Submit New Bodega Cat</h2>
      <form onSubmit={props.addNewCat}>
        <span>Image: </span> <input type="text" onChange={props.addNewImage} />
        <br />
        <br />
        <span>Date: </span> <input type="text" onChange={props.addNewDate} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </section>
  );
};

export default NewCatForm;
