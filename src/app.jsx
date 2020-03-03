import React, { Component } from 'react'
import { AUTH_TOKEN } from "./configs/config"

import Profile from './components/profile'
import Gallery from './components/gallery'



import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import { GoSearch } from "react-icons/go"

import './css/app.css'

// import { authEndpoint, clientId, redirectUri, responseType, scopes, showDialog } from "./config";
// import hash from "./hash";


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            artist: null,
            tracks: []
        }
    }

    
    searchArtist() {
        console.log('this.state', this.state);
         
        const BASE_URL='https://api.spotify.com/v1/search?';
        let FETCH_URL = `${BASE_URL}q='${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

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
        // .then(json => console.log('json', json))
        .then(json => {
            let artist = json.artists.items[0];
                        
            console.log('artist', artist);
            
            this.setState({
                artist: artist,
            })

            FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=PT`;

            fetch(FETCH_URL, {
                method: 'GET',
                headers: {
                    'Content-Type' :'application/json',
                    'Authorization': AUTH_TOKEN,
                },
            })
            .then(response => response.json())
            .then(json => {
                console.log('artist\'s top tracks: ', json);
                
                // const tracks = json.tracks;
                const { tracks } = json;
                
                this.setState({
                    tracks: tracks
                })
            })
        });
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
                            onChange={
                                event => {
                                    this.setState({query: event.target.value})
                                }
                            }
                            onKeyPress={
                                event => {
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
                
                {
                    this.state.artist !== null 
                    ?
                        <div>
                            <Profile
                                artist = {this.state.artist}
                            />

                            <Gallery 
                                tracks = {this.state.tracks}
                            />
                        </div>
                    : 
                        <div>
                            Welcome to music master. <br></br>
                            Search for an artist to check his profile.
                        </div>
                }
            </div>
        )
    }
}