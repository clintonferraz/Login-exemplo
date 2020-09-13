import React, { useState } from 'react';
import './Admin.css'
import api from '../../services/api'


    
export default () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            identifier: login,
            password: password
        }

        const response = await api.post('auth/local', data) ;

        console.log(response);

    }


    return (
        <div className="admin">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Administrador</h2>
                <label >Login:</label><br/>
                <input type="text" id="login" value={login} onChange={ event => setLogin(event.target.value)} /><br/>
                <label >Senha:</label><br/>
                <input type="text" id="password" value={password} onChange={ event => setPassword(event.target.value)} /><br/>
                <input type="submit" value="Entrar" id="submit-btn"/>
            </form>
        </div>
    );

}
