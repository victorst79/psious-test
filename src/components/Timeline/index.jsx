import React from 'react';
import File from '../File'
import Track from '../Track'
import './style.scss'

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [
                {id: 1, name: 'File-1'},
                {id: 2, name: 'File-2'},
                {id: 3, name: 'File-3'}
            ],
            trackList: [<Track nameTrack={'Track-0'} key={`track-0`} />]
        }
    }

    addTrack = () => {
        this.setState({
          trackList: [...this.state.trackList, 
            <Track 
                key={`track-${this.state.trackList.length}`}
                id={this.state.trackList.length}
                nameTrack={`Track-${this.state.trackList.length}`} />]
        })
      }

      onDragEnd = result => {
          console.log(result)
      }

    render() {
        return ( 
            <section className={'tl-container'}>
                <div className={'tl-container_files'}>
                    {this.state.files.map((file, index) => (
                        <File key={`file-${index}`} name={file.name} id={file.id} />
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