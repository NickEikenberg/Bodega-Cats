const NavBar = (props) => {
  return (
    <nav>
      <button onClick={props.showHideAddModal}>New Bodega Cat</button>
    </nav>
  );
};

export default NavBar;
