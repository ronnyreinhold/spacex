import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Launch extends Component {
    state = {
        launch: {}
    }

    async componentDidMount(){
        
        const launch = this.props.match.params.id;
        const res = await api.post('/graphql', {
            query: `{ getLaunch(id: ${launch}){
                mission,
            }}`
        });
        this.setState({ launch: res.data.data.getLaunch});
    }

    render(){
        return(
            <h1>{this.state.launch.mission}</h1>
        )
    }
}