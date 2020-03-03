import React, { Component } from 'react'
import '../css/app.css'

export default class Profile extends Component {
    render() {
        // console.log('this.props',this.props);

        let artist = {
            name: '',
            followers: {
                total: ''
            },
            images: [
                {url: ''}
            ],
            genres: []
        }
        
        // get the artist from query if query object exists otherwise artist is blank
        artist = this.props.artist !== null && this.props.artist !== undefined ? this.props.artist : artist;
        
        // ternary that checks what to render
           return this.props.artist !== undefined
            ?
                // render the artist profile
                <div className='profile'>                
                    <img
                        className='profile-img'
                        src={artist.images[0].url}
                        alt=''
                    />
                    
                    <div className='profile-info'>
                        <div className='profile-name'>
                            {artist.name}
                        </div>

                        <div className='profile-followers'>
                            {artist.followers.total} followers
                        </div>

                        <div className='profile-genres'>               
                            {artist.genres.map((genre, index) => {
                                
                                let ags = artist.genres;
                                
                                // separate genres by commas, if second to last add a space and if last add '&' before genre
                                genre = genre !== ags[ags.length-1] && genre !== ags[ags.length-2] ?`${genre}, `: genre === ags[ags.length-2] ?`${genre} `:`& ${genre}`;

                                return(
                                    <span key={index}>{genre}</span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            :
                // render error/warning message
                <div>
                    <p>Please provide a valid artist name and search again.</p>
                </div>
            ;
    }
}

