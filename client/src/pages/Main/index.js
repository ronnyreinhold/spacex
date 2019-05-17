import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import logo from '../../assets/early-acess.gif';
import Utils from '../../utils/Utils.js';

export default class Main extends Component {
    state = {
        launches: []
    }

    async componentDidMount(){
        const response = await api.post('/graphql', {
            query: `{ getLaunches{
                id,
                mission,
                success,
                date,
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
                        <h1>SpaceX</h1>
                        <small> This app shows every SpaceX launch over the years </small>
                    </header>
                </div>
                <div className="row black">
                    <h2>Launches</h2>
                    <div className="timeline">
                        { this.state.launches && this.state.launches.map( launch => ( 
                            <div className={((launch.id % 2 === 0) 
                            ? `container${((launch.success) ? "" : "-error")} right`
                            : `container${((launch.success) ? "" : "-error")} left`
                            )} key={launch.id}>
                                <div className="content" >
                                    <span>{Utils.setDateToString(launch.date)}</span>
                                    <h3>{launch.mission}</h3>
                                </div>
                            </div>
                        ))}
                    </div>                
                </div>
            </div>
        )
    }
}