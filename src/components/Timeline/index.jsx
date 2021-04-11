import React from 'react';
import File from '../File'
import Track from '../Track'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import exportAction from '../../utils/exportAction'
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
            allFiles: {}
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
        const formatDataFiles = {}
        data.files.map(file => formatDataFiles[file.idTrack] = file)

        this.setState({
            allFiles: {
                ...this.state.allFiles,
                ...formatDataFiles
            }
        })
    }

    getTotalTime = () => {
        exportAction(this.state.allFiles)
    }

    render() {
        const { files, trackList } = this.state;

        return ( 
            <section className={'tl-container'}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={'tl-container_files'}>
                            <h3>Files/Resources</h3>
                            {files.map((file, index) => (
                                <File key={`file-${index}`} name={file.name} id={file.id} color={file.color} />
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid className={'tl_file-container'} >
                            <Button variant="contained" color="primary" onClick={this.addTrack}>Add track</Button>
                            <Button variant="contained" color="primary" onClick={this.getTotalTime}>Export</Button>
                        </Grid>
                        <Grid item xs={12}>
                            {trackList.map(track => track)}
                        </Grid>
                    </Grid>
                </Grid>
            </section>
         )
    }
}