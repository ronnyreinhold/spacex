import api from '../services/api';

export default class Launch {
    async getLaunch(id) {
        const res = await api.get(`/${id}`);
        return this.reducer(res.data);
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
                type: data.rocket.rocket_type
            }
        }
    }
}