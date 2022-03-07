export default function PageNavBarPhone() {
  return (
    <div className="container d-flex d-xxl-none d-xl-none d-lg-none d-md-none d-sm-none position-absolute bottom-0 start-50 translate-middle-x">
      <a
        id="App-logo"
        className="navbar-brand border-bottom border-info pb-0 mb-1 lh-1"
        href="#"
      >
        HACKFLIX
      </a>

      <button
        className="navbar-toggler btn btn-lin"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#responsiveNav"
        aria-controls="responsiveNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Explorar
      </button>
      <div className="collapse navbar-collapse" id="responsiveNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Series
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Peliculas
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
