import React from 'react';
import { Rnd } from "react-rnd";
import './style.scss'

class Track extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
        this.onDropHandler = this.onDropHandler.bind(this)
    }

    componentDidUpdate() {
        this.props.onChange && this.props.onChange(this.state);
    }

    onDragOverHandler(event) {
        event.preventDefault();
    }

    onDropHandler(event) {
        const auxId = `${this.props.nameTrack}-${this.state.files.length}`
        const fileName = event.dataTransfer.getData("file-name")
        const color = event.dataTransfer.getData("file-color")
        const position = event.clientX        
        

        this.setState({
            files: [...this.state.files, {
                    id: this.state.files.length,
                    idTrack: auxId,
                    name: fileName,
                    width: 200,
                    height: 52,
                    x: position,
                    y: 0,
                    color: color
                }
            ]
        })
    }

    renderFiles() {
        const { files } = this.state;
        return (
            files.map((file, index) => 
                <Rnd
                    key={index}
                    className={'track_file'}
                    style={{backgroundColor: file.color}}
                    bounds="parent"
                    enableResizing={{
                        top: false,
                        right: true,
                        bottom: false,
                        left: true,
                        topRight: false,
                        bottomRight: false,
                        bottomLeft: false,
                        topLeft: false
                    }}
                    size={{ width: file.width, height: file.height }}
                    position={{ x: file.x, y: file.y }}
                    onDragStop={(e, d) => {
                        const item = files[file.id]
                        item.x = d.x;
                        item.y = d.y;
                        files[files.id] = item;
                        this.setState({files: files})
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                        const item = files[file.id]
                        item.width = ref.style.width;
                        item.height = ref.style.height;
                        item.x = position.x;
                        item.y = position.y;
                        files[file.id] = item;

                        this.setState({files: files})
                    }}>
                    {file.name}
                </Rnd>
            )
        )

    }

    render() {
        const { nameTrack } = this.props;

        return (
            <div
                className={'track_container'}
                onDragOver={this.onDragOverHandler}
                onDrop={this.onDropHandler}>
                    {nameTrack}
                    {this.renderFiles()}
            </div>
        )
    }
}

export default Track;