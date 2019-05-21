import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import './style.css';

export default class Launch extends Component {
    state = {
        launch: {},
        isLoading: true
    }

    async componentDidMount(){
        //const launch = this.props.match.params.id;
        const { id } = this.props.match.params;
        if(id !== ""){
            await api.post('/graphql', {
                query: `{ getLaunch(id: ${id}){
                    id,
                    mission,
                    success,
                    rocket{
                        id,
                        name,
                        type
                    }
                }}`
            })
            .then(res => this.setState({ launch: res.data.data.getLaunch, isLoading: false}))
            .catch(err => (console.log(err.message)));
        }
       

        if(this.state.launch.rocket){
            await api.post('/graphql', {
                query: `{ getRocket(id: "${this.state.launch.rocket.id}"){
                    description
                }}`
            })
            .then(res => this.setState({launch: { ...this.state.launch, 
                rocket: { ...this.state.launch.rocket, 
                    description: res.data.data.getRocket.description }}}))
            .catch(err => console.log(err.message));
        }
    }

    render(){
        const { id, mission, rocket} = this.state.launch;
        return(
            <div className="">
                {this.state.isLoading 
                ? <h3>Loading...</h3> 
                :
                <Fragment>
                    <h3>{mission}</h3>
                    <p>{rocket.name}</p>
                    <p>{rocket.description}</p>
                </Fragment> 
                }
                
            </div>
        )
    }
}