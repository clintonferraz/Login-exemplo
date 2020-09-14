import api from './api'

export const isAuthenticated = async () => {
    try{
        const response = await api.get('projetos',{
            headers: {
                Authorization: `Bearer ${localStorage.tolken}`,
            }
        });
        if(response.status === 200)
            return true;

    } catch{
        return false;
    }
            
}

