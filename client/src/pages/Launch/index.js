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
        const res = await api.post('/graphql', {
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
        });
        this.setState({ launch: res.data.data.getLaunch, isLoading: false});
    }

    render(){
        const { mission, rocket} = this.state.launch;
        return(
            <div className="">
                {this.state.isLoading 
                ? <h3>Loading...</h3> 
                :
                <Fragment>
                    <h3>{mission}</h3>
                    <p>{rocket.name}</p>
                </Fragment> 
                }
                
            </div>
        )
    }
}