import './NavBar.css';

function NavBar() {
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                <img src="/assets/menu-logo.png" alt="" className="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Quienes Somos
                                    <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Servicios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                            <button class="btn btn-success my-2 my-sm-0" type="submit">Contratar</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;