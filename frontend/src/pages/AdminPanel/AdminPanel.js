import React from 'react';
import api from '../../services/api'
import './AdminPanel.css';


export default () => {

    const loadProjects = async () => {      

        try{
            const response = await api.get('projetos') ;

            console.log(response.data);
           
            
            

        } catch {
            alert("Falha ao carregar projetos.");
        }

    }

    const createCards = () => {
        
    }

    loadProjects();

    return (
        <div className='admin-panel'>
            <div className='btn-container'>
                <button id='new-project-btn'>Novo Projeto</button>
            </div>
            <div className='projects-container'>




            </div>



        </div>
    )
}