import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Main extends Component {
    state = {
        launches: []
    }

    async componentDidMount(){
        const response = await api.post('/graphql', {
            query: `{ getLaunches{
                id,
                mission,
                rocket{
                    name
                }
            } }`
        });
        this.setState({ launches: response.data.data.getLaunches });
    }

    render(){
        return(
            <div id="container">
                { this.state.launches && this.state.launches.map(launch => (
                    <p className="text" key={launch.id}>{launch.mission}</p>
                ))}
            </div>
        )
    }
}