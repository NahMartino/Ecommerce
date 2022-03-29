import './NavBar.css';

const NavBar = () => {
    return(
        <nav>
        <h4>BootsCat</h4>
        <ul class="nav nav-tabs">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="rol.html">Juegos de rol</a></li>
            <li><a href="dados.html">Dados</a></li>
            <li><a href="mesa.html">Juegos de mesa</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
    )
}

export default NavBar;