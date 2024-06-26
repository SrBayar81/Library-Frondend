import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/UserMenu.css';

function UserMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="user-menu">
            <button onClick={() => setMenuOpen(!menuOpen)}>Usuario</button>
            {menuOpen && (
                <ul className="menu">
                    <li><Link to="/profile">Mi Perfil</Link></li>
                    <li><Link to="/favorites">Favoritos</Link></li>
                    <li><Link to="/reservations">Reservas</Link></li>
                    <li><Link to="/loans">Pr�stamos</Link></li>
                    <li><button onClick={() => {/* l�gica para cerrar sesi�n */ }}>Cerrar Sesi�n</button></li>
                </ul>
            )}
        </div>
    );
}

export default UserMenu;


