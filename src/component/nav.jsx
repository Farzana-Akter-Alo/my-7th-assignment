function Nav() {
  return (
    <div className="nav-div">
      <div className="nav-content">
        <h1>CS — Ticket System</h1>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Changelog</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button className="nav-btn"> + New Ticket</button>
      </div>
    </div>
  );
}
export default Nav;
