import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import logo from '../../assets/early-acess.gif';
import Utils from '../../utils/Utils.js';

export default class Main extends Component {
    state = {
        launches: [],
        isLoading: true
    }

    handleSubmit = (id) => {
        this.props.history.push(`/launches/${id}`);
    }

    async componentDidMount(){
        const response = await api.post('/graphql', {
            query: `{ getLaunches{
                id,
                mission,
                success,
                date,
            } }`
        });
        this.setState({ launches: response.data.data.getLaunches, isLoading: false });
    }

    render(){ 
        return(
            <div id="main-container">
                <div className="row white">
                    <header>
                        <img src={logo} alt="" />
                        <h1>Space<span className="azul">X</span></h1>
                        <small> This app shows every SpaceX launch over the years </small>
                    </header>
                </div>
                <div className="row black">
                    <h2 id="launches">Launches</h2>
                    { this.state.isLoading ? <h3>Loading...</h3> : "" }
                    <div className="timeline">
                        { this.state.launches && this.state.launches.map( launch => ( 
                            <div className={((launch.id % 2 === 0) 
                            ? `container${((launch.success) ? "" : "-error")} right`
                            : `container${((launch.success) ? "" : "-error")} left`
                            )} key={launch.id}>
                                <div className="content" onClick={() => this.handleSubmit(launch.id)}>
                                    <span>{Utils.setDateToString(launch.date)}</span>
                                    <h3>{launch.mission}</h3>
                                </div>
                            </div>
                        ))}
                    </div> 
                    <a href="#launches" className="buttonTop">
                        <div className="up">
                            <p>UP</p>
                        </div>
                    </a>             
                </div>
            </div>
        )
    }
}