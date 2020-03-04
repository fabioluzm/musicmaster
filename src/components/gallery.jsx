import React, { Component } from 'react'
import { FaPlay, FaPause } from "react-icons/fa"
import '../css/app.css'

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        
        if (!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio: audio
            })
        }
        else
        {
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause();
                this.setState({
                    playing: false
                })
            }
            else
            {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio: audio
                })
            }
        }
    }

    render() {        
        // const tracks = this.props.tracks;
        const { tracks } = this.props;

        return (
            <div>
                {tracks.map((track, index) => {
                    // console.log('track',track);
                    
                    const trackingImg = track.album.images[0].url;
                    return(
                        <div 
                        key={index}
                        className='track'
                        onClick = {() => this.playAudio(track.preview_url)}
                    >
                        <img
                            className='track-img'
                            src={trackingImg}
                            alt='track'
                        />
                        <div className="track-play">
                            <div className="track-play-inner">
                                {
                                    this.state.playingUrl === track.preview_url && this.state.playing === true
                                    ?
                                    <FaPause />
                                    :
                                    <FaPlay />
                                }
                            </div>
                        </div>
                        <p className='track-text'>
                            {track.name}
                        </p>
                    </div>
                    )
                })}
            </div>
        )
    }
}
