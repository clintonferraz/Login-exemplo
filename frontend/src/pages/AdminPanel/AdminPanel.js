import React from 'react';
import api from '../../services/api'
import './AdminPanel.css';


export default class AdminPanel extends React.Component {

    state = {
        projeto: []
    }

    componentDidMount(){
        api.get('projetos')
            .then(response => {
                const projeto = response.data;
                this.setState({ projeto });
            });
    }


    render() {


        const teste = () => {
            alert('oi');

        }

        return (
            <div className='admin-panel'>
                <div className='btn-container'>
                    <button id='new-project-btn' onClick={teste} >+ Novo Projeto</button>
                    {/* this.state.projeto.map(projeto => <button key={projeto.id}>{projeto.Ordem}</button>) */}
    
                </div>
                <div className='projects-container'>
                    {this.state.projeto.map(projeto =>
                        <div key={projeto.id}>
                            <div className='projeto'>
                                {projeto.Titulo}<br/><br/>
                                {projeto.Descricao}

                            </div> 
                        </div>
                    )}
    
    
    
                </div>
    
    
    
            </div>
        )
    
    }
}