import React, { Component } from 'react';
import "./app.css";
// import { authEndpoint, clientId, redirectUri, responseType, scopes, showDialog } from "./config";
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

    // componentDidMount() {
    //     // Set token
    //     let _token = hash.access_token;
    
    //     if (_token) {
    //       // Set token
    //       this.setState({
    //         token: _token
    //       });
    //       this.getSearchQuery(_token);
    //     }
    //   }

    // searchArtist() {
    //     console.log('this.state', this.state);
       
    //     const AUTHORIZE_URL = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&show_dialog=${showDialog}`;            
    //     window.location = AUTHORIZE_URL;
    // }

    // getSearchQuery() {
    //     const BASE_URL = 'https://api.spotify.com/v1/search?';
    //     const FETCH_URL = `${BASE_URL}q='${this.state.query}&type=artist&limit=1`;
    //     // console.log('FETCH_URL', FETCH_URL);

    //     let token = 'Bearer' + _token;

    //     fetch(FETCH_URL, { 
    //         method: 'GET',
    //         headers: {
    //             // 'Authorization': 'Bearer BQAymjIoIR0G9BieGEDaSSBZXDXBjDAgo6ttsxUZL2H__VrmJEBvewVc79CwI8oxHpYJHQ1j3ol6OUG76wjomRlje4mlEjATAa6QUx2ACNrcz5Ko4zE2NmF-8EtISfcBJS0sTDrY-4sxLrRBycrAcK9MMIEgT2VoHO4'
    //             'Authorizathion': token
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(json => console.log('json', json));
    // }
    
    searchArtist() {
        console.log('this.state', this.state);
         
        const BASE_URL='https://api.spotify.com/v1/search?';
        // const FETCH_URL =BASE_URL+'q='+this.state.query+'&type=artist&limit=1';
        const FETCH_URL = `${BASE_URL}q='${this.state.query}&type=artist&limit=1`;
        // const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
        const auth_token = 'Bearer BQAANJzzkA9S4wGwd_h1nE4kbrx75SDsTsG2k5LdoL65ktLfnefJUMzH_rK4AJmZ1v9Lf3dLb5eNbibNNf2pIf1PcVQV9-aTZ7Vvjn5_5h2DmL5g0ZUZqrNz-n87IoOsHltvpNxHO--BsKTEoEWfjpzXODz6A_vnsDYnNSxzfV_KSySI7DbcOMyhpz539CPnqZQ4hWPX-EKEwkQ_4Oul09yCqb5Y7INDWbfYLJwn8XA8WNtJ-hWvdfQX9tzuv4g2o557BdO6GlPRYMybYv6mzzkhDDnH8Ba0Og';


        fetch(FETCH_URL,{
            method:'GET',
            headers: {
            'Content-Type' :'application/json',
            'Authorization': auth_token,
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