import { RESTDataSource } from 'apollo-datasource-rest' 

export default class Rocket extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://api.spacexdata.com/v3';
    }
    async getRocket(id) {
        const res = await this.get(`/rockets/${id}`);
        return this.reducer(res);
    }

    async getRockets() {
        const res = await this.get('/rockets');
        return Array.isArray(res) ? res.map(rocket => this.reducer(rocket)) : [];
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