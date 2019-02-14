import React, { Component } from 'react';
import axios from 'axios';
import ListItems from './ListItems';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num_value: '',
            results: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ num_value: event.target.value });

    }

    handleSubmit(event) {
        axios.get('http://localhost:3001/', {
            params: {
                num: this.state.num_value,
            }
        })
            .then((response) => {
                this.setState({ results: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    }

    render() {
        
        return (
            <div>
                <h2>Enter a value</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <textarea value={this.state.num_value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {(this.state.results.length === 0) ? <p></p> : <ListItems results={this.state.results} />}
                </div>
            </div>
            );
        }
    }
    
    export default App;

