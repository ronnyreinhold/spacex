import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import logo from '../../assets/early-acess.gif';

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
            <div id="main-container">
                <div className="row white">
                    <header>
                        <img src={logo} alt="" />
                        <h2>SpaceX</h2>
                    </header>
                </div>
                <div className="row black">
                    <h2>Launches</h2>
                    <div>
                        <h3>s</h3>
                    </div>
                </div>
                
                { this.state.launches && this.state.launches.map(launch => (
                    <p className="text" key={launch.id}>{launch.mission}</p>
                ))}
            </div>
        )
    }
}