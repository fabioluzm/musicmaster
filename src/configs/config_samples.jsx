// componentDidMount() {
//     // Set token
//     let _token = hash.access_token;

//     if (_token) {
//         // Set token
//         this.setState({
//         token: _token
//         });
//         this.getSearchQuery(_token);
//     }
// }

// searchArtist() {
//     console.log('this.state', this.state);
    
//     const AUTHORIZE_URL = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&show_dialog=${showDialog}`;            
//     window.location = AUTHORIZE_URL;
// }

// getSearchQuery() {
//     const BASE_URL = 'https://api.spotify.com/v1/search?';
//     const FETCH_URL = `${BASE_URL}q='${this.state.query}&type=artist&limit=1`;
//     console.log('FETCH_URL', FETCH_URL);

//     let token = 'Bearer' + _token;

//     fetch(FETCH_URL, { 
//         method: 'GET',
//         headers: {
//             // 'Authorization': 'Bearer BQAymjIoIR0G9BieGEDaSSBZXDXBjDAgo6ttsxUZL2H__VrmJEBvewVc79CwI8oxHpYJHQ1j3ol6OUG76wjomRlje4mlEjATAa6QUx2ACNrcz5Ko4zE2NmF-8EtISfcBJS0sTDrY-4sxLrRBycrAcK9MMIEgT2VoHO4',
//             'Authorizathion': token
//         }
//     })
//     .then(response => response.json())
//     .then(json => console.log('json', json));
// }