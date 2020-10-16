import React from 'react';

import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';
import './Home.css'

export default () => (
    <>
        <HeaderMenu />
            <div className="home-content-container">
                <h1>Sobre a aplicação</h1>
                <p>O objetivo desse projeto foi criar uma página de login de autenticação, juntamente com um painel básico para criação ou exclusão de campos de texto no backend. Campos estes que eu chamei arbitrariamente de "projetos".<br/>
                <br/>
                &emsp;-Para visualizar os campos existentes, clique na aba "Projetos" acima.<br/>
                <br/>
                &emsp;-Para acessar o painel, entre na rota "/admin".<br/>
                &emsp;&emsp;&emsp;É necessário criar um usuário novo através do painel de administração do strapi.<br/>
                <br/>
                <br/>
                <br/>
                Falhas percebidas: <br/>
                <br/>
                &emsp;&emsp;&emsp;-A autenticação para acesso à rota "/adminpanel" não é totalmente segura, já que a aplicação apenas verifica se existe um token jwt no local storage do navegador. A correção dessa falha, fica por enquanto, como uma tarefa futura.
            
                </p>
            </div>
        <Footer />
    </>

);