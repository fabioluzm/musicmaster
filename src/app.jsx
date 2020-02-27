import React, { Component } from 'react';
import "./app.css";
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
        
        const CLIENT_ID = '96fddf30b44b417e8427c597040731cc'; // Your client id
        const CLIENT_SECRET = 'fc77b0523cb6401b9f065d8d5c5bc287'; // Your secret
        const REDIRECT_URI = 'REDIRECT_URI'; // Your redirect uri

        const BASE_URL = 'https://api.spotify.com/v1/search';
        const FETCH_URL = `${BASE_URL}?q='${this.state.query}&type=artist&limit=1`;
        console.log('FETCH_URL', FETCH_URL);

        // fetch(FETCH_URL, { 
        //     method: 'GET',
        //     headers: {
        //         'Authorization': 'Bearer [INSERT_TOKEN_FROM_STEP_2]' 
        //     }
        // })
        // .then(response => response.json())
        // .then(json => console.log('json', json));
        
        fetch(FETCH_URL, {
            method: 'GET',
            headers: {
                'Autorization':'Bearer BQAZJzih_2831rIhwtv5F_hx4PJaWehgPvl9nZ-4gsbbLaCFmGJD0YTN8e_gWiB_jjnd4_lbsBJR_ipiADdA99983tMgdmFvDw2xivk9mKqTGsccBoWlRmDtWHEZNB-EZI2-jydGHjGL2zZb9vmoMkzUJ2_nI2tcH-Q'
            }
        })
        .then(response => response.json())
        .then(json=>console.log('json', json));

        
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