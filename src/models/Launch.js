import { RESTDataSource } from 'apollo-datasource-rest' 

export default class Launch extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://api.spacexdata.com/v3';
    }
    async getLaunch(id) {
        const res = await this.get(`/launches/${id}`);
        return this.reducer(res);
    }

    async getLaunches(){
        const res = await this.get('/launches');
        return Array.isArray(res) ? res.map(launch => this.reducer(launch)) : [];
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