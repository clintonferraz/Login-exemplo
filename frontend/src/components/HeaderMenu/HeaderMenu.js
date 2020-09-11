import React from 'react';
import  { Link } from 'react-router-dom';
import './HeaderMenu.css';

export default () => (
        <div className="header-menu">
            <div className="header-menu-container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projetos">Projetos</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
            </div>
        </div>
);
