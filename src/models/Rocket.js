import api from '../services/api';

export default class Rocket {
    async getRocket(id) {
        const res = await api.get(`/rockets/${id}`);
        return this.reducer(res.data);
    }

    async getRockets() {
        const res = await api.get('/rockets');
        return Array.isArray(res.data) ? res.data.map(rocket => this.reducer(rocket)) : [];
    }

    reducer(data){
        return {
            id: data.rocket_id,
            name: data.rocket_name,
            type: data.rocket_type,
            description: data.description
        }
    }
}