import api from '../services/api';

export default class Launch {
    async getLaunch(id) {
        const res = await api.get(`/launches/${id}`);
        return this.reducer(res.data);
    }

    async getLaunches(){
        const res = await api.get('/launches');
        return Array.isArray(res.data) ? res.data.map(launch => this.reducer(launch)) : [];
    }

    reducer(data){
        return {
            id: data.flight_number || 0,
            mission: data.mission_name,
            year: data.launch_year,
            date: data.launch_date_local,
            success: data.launch_success,
            rocket: {
                id: data.rocket.rocket_id,
                name: data.rocket.rocket_name,
                type: data.rocket.rocket_type,
            }
        }
    }
}