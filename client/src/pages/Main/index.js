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
                success,
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
                    </header>
                </div>
                <div className="row black">
                    <h2>Launches</h2>
                    <div className="timeline">
                        { this.state.launches && this.state.launches.map( launch => ( 
                            <div className={((launch.id % 2 === 0) 
                            ? `container${((launch.success) ? "" : "-error")} right`
                            : `container${((launch.success) ? "" : "-error")} left`
                            )}>
                                <div className="content" key={launch.id}>
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