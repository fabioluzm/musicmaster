import React, { Component } from 'react';
import "./app.css";
import { authEndpoint, clientId, redirectUri, responseType, scopes, showDialog } from "./config";
import hash from "./hash";
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { GoSearch } from "react-icons/go";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            query: '',
        }
    }

    componentDidMount() {
        // Set token
        let _token = hash.access_token;
    
        if (_token) {
          // Set token
          this.setState({
            token: _token
          });
          this.getSearchQuery(_token);
        }
      }

    searchArtist() {
        console.log('this.state', this.state);
       
        // const AUTHORIZE_URL = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=${responseType}&show_dialog=${showDialog}`;
        const AUTHORIZE_URL = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&show_dialog=${showDialog}`;
            
        window.location = AUTHORIZE_URL;
    }

    getSearchQuery(_token) {
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q='${this.state.query}&type=artist&limit=1`;
        // console.log('FETCH_URL', FETCH_URL);

        let token = 'Bearer' + _token;

        fetch(FETCH_URL, { 
            method: 'GET',
            headers: {
                'Authorization': 'Bearer BQBjvuYP3nKsaUI_KGLwdPtzym5FtKqphLtBeIA-MGhZRU8V8ql3Q-kPfLgsPvbAGjS7fdziS699d6H5t_cJvYBQ3QFzqSEGzbZRoX81LBtMNfgaOJeiu-BMT0cZv_RmgORispo9E20_EFaTdzJp3XJ55iuQQCz2cb0', 
            }
        })
        .then(response => response.json())
        .then(json => console.log('json', json));
    }
    // componentDidMount () {
    //     let _token = hash.access_token;
        
    //     if(_token) {
    //         this.setState({
    //             token: _token
    //         });
    //     }
    // }    
        

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