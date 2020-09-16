import React from 'react';
import api from '../../services/api'
import './AdminPanel.css';

export default class AdminPanel extends React.Component {
 
    state = {
        projeto: [],
        titulo:'',
        descricao:'',
    }
 
    reloadProjects(){
        api.get('projetos')
        .then(response => {
            const projeto = response.data;
            this.setState({ projeto });
        });
    }

    componentDidMount(){
        this.reloadProjects();
    }

    render() {
        let Titulo, Descricao;

        const newProject = () => {
                api.post('projetos', {
                        Titulo:Titulo,
                        Descricao:Descricao,
                    },  
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.tolken}`,
                        },
                    }
                )
                .then(response => { 
                    this.reloadProjects();
                    console.log(response);
                })
                .catch(function (error) {
                    if (error.response) {
                      console.log(error.response.status);
                      console.log(error.response);
                      alert('Não foi possível criar o novo projeto, verifique se o titulo já está em uso.');
                    }
                });
                hideNewProjectForm();
            
        }

        const showNewProjectForm = () => {
            document.querySelector('.new-project-form').classList.remove('hidden');
        }
        const hideNewProjectForm = () => {
            document.querySelector('.new-project-form').classList.add('hidden');
        }

        const logOut = () => {
            localStorage.clear();
            window.location.href = '/admin';


        }       



        const delBtnClick = (projeto) => {
            api.delete('projetos/' + projeto.id,  
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.tolken}`,
                    },
                }
            )
            .then(response => { 
                this.reloadProjects();
            });



        }

        return (
            <div className='admin-panel'>
                <div className='btn-container'>
                    <button id='new-project-btn' onClick={showNewProjectForm} >+ Novo Projeto</button>
                    <button id='exit-btn' onClick={logOut}>Sair</button>
                    {/* this.state.projeto.map(projeto => <button key={projeto.id}>{projeto.Ordem}</button>) */}
    
                </div>
                <div className='projects-container'>
                    {this.state.projeto.map(projeto =>
                       
                            <div className='projeto' key={projeto.id}>
                                {projeto.Titulo}<br/><br/>
                                {projeto.Descricao}
                                <button onClick={() => delBtnClick(projeto)}>Delete</button>
                            </div> 
                        
                    )}
                </div>
                <div className='new-project-form hidden'>
                    Título:
                    <input type='text' onChange={event => Titulo = event.target.value}></input>
                    Descrição:
                    <textarea rows='4' onChange={event => Descricao = event.target.value}></textarea>
                    <div className='buttons'>
                        <button onClick={newProject}>Criar Projeto</button>
                        <button onClick={hideNewProjectForm}>Cancelar</button>
                    </div>
                    
                </div>
    
            </div>
        )
    
    }
}