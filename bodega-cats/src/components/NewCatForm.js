const NewCatForm = (props) => {
  return (
    <section>
      <h2>Submit New Bodega Cat</h2>
      <form>
        Image: <input type="text" onChange={props.addNewImage} />
        <br />
        <br />
        Date: <input type="text" onChange={props.addNewDate} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </section>
  );
};

export default NewCatForm;
