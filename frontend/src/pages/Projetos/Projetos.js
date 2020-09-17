import React from 'react';
import api from '../../services/api'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';
import './Projetos.css'

export default class Projetos extends React.Component {
    state = {
        projeto: []
    }
 
    loadProjects(){
        api.get('projetos')
        .then(response => {
            const projeto = response.data;
            this.setState({ projeto });
        });
    }

    componentDidMount(){
        this.loadProjects();
    }
    
    render(){


        return(
            <div className="projetos-page">
                <HeaderMenu />
                    <div className='projetos-container'>
                        {this.state.projeto.map(projeto =>
                            
                            <div className='projeto' key={projeto.id}>

                                <span className="titulo">{projeto.Titulo}</span><br/><br/>
                                <span className="descricao">{projeto.Descricao}</span>
                                
                            </div> 
                        
                        )}
                    </div>
     
                <Footer />
            </div>
        
    
    
    
        )

    }

    

}