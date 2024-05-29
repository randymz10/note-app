function Header({children}) {
  return (
    <header className="d-flex justify-content-between border-bottom mb-5 mx-3 pb-3">
      <h1>
        <i className="bi bi-pencil-fill"></i> Notes app
      </h1>
      {children}
    </header>
  );
}

export default Header;
