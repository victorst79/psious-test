import React from 'react';
import File from '../File'
import Track from '../Track'
import './style.scss'

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [
                {id: 1, name: 'File-1', color: '#ce93d8'},
                {id: 2, name: 'File-2', color: '#f48fb1'},
                {id: 3, name: 'File-3', color: '#ef9a9a'}
            ],
            trackList: [<Track nameTrack={'Track-0'} key={`track-0`} onChange={this.getFilesInTrack} />],
            allFiles: []
        }
    }

    addTrack = () => {
        this.setState({
          trackList: [...this.state.trackList, 
            <Track
                key={`track-${this.state.trackList.length}`}
                id={this.state.trackList.length}
                nameTrack={`Track-${this.state.trackList.length}`} onChange={e => this.getFilesInTrack(e)} />]
        })
    }

    getFilesInTrack = data => {
        console.log(...data.files)
        this.setState({
            allFiles: [
                ...this.state.allFiles,
                ...data.files
            ]
        })
        console.log(this.state.allFiles)
    }

    render() {
        const { files, trackList } = this.state;

        return ( 
            <section className={'tl-container'}>
                <div className={'tl-container_files'}>
                    {files.map((file, index) => (
                        <File key={`file-${index}`} name={file.name} id={file.id} color={file.color} />
                    ))}
                </div>
                
                <div>
                    <button onClick={this.addTrack}>Add track</button>
                    <button onClick={this.getTotalTime}>Total time</button>
                    <div>
                        {trackList.map(track => track)}
                    </div>
                </div>
            </section>
         )
    }
}