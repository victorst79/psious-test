import React from 'react';
import File from '../File'
import Track from '../Track'

import './style.scss'

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [
                {name: 'File-1'},
                {name: 'File-2'},
                {name: 'File-3'}
            ],
            trackList: [<Track nameTrack={'Track-0'} key={`track-0`}/>]
        }
    }

    addTrack = () => {
        this.setState({
          trackList: [...this.state.trackList, 
            <Track 
                key={`track-${this.state.trackList.length}`}
                nameTrack={`Track-${this.state.trackList.length}`} />]
        })
      }

    render() {
        return ( 
            <section className={'tl-container'}>
                <div className={'tl-container_files'}>
                    {this.state.files.map((file, index) => (
                        <File key={`file-${index}`} name={file.name}/>
                    ))}
                </div>
                
                <div>
                    <button onClick={this.addTrack}>Add track</button>
                    <div>
                        {this.state.trackList.map(track => track)}
                    </div>
                </div>
            </section>
         )
    }
}