import React, { Component } from 'react';
import "./app.css";
// import { authEndpoint, clientId, redirectUri, responseType, scopes, showDialog } from "./config";
import { AUTH_TOKEN } from "./config";
// import hash from "./hash";
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { GoSearch } from "react-icons/go";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        }
    }

    
    searchArtist() {
        console.log('this.state', this.state);
         
        const BASE_URL='https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q='${this.state.query}&type=artist&limit=1`;
        // // const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

        fetch(FETCH_URL,{
            method:'GET',
            headers: {
            'Content-Type' :'application/json',
            'Authorization': AUTH_TOKEN,
            },
            // mode: 'cors',
            // cache:'default'
        })
        .then(response => response.json())
        .then(json => console.log('json', json));
    }   

    render() {
        return (
            <div className="app">
                <div className="app-title">Music Master</div>
                
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="search for an artist"
                            value={this.state.query}
                            onChange={event => {
                                    this.setState({query: event.target.value})
                                }
                            }
                            onKeyPress={event => {
                                    return event.key === 'Enter' ? this.searchArtist() : '';
                                }
                            }
                        />
                            
                        <InputGroup.Append>
                            <Button 
                                onClick={()=>this.searchArtist()}
                            >
                                <GoSearch />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>

                <div className="app-profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;