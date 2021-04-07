import React from 'react';
import { Rnd } from "react-rnd";

interface asd{
    x: any,
    y: any,
    width: any,
    height: any,
}

export default class File extends React.Component<{}, asd> {
    constructor(props: {}) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            width: 320,
            height: 200,
        }
      }
      
    render() {
        return (
            <Rnd
                size={{ width: this.state.width,  height: this.state.height }}
                position={{ x: this.state.x, y: this.state.y }}
                onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                onResize={(e, direction, ref, delta, position) => {
                    this.setState({
                    width: ref.offsetWidth,
                    height: ref.offsetHeight,
                    ...position,
                    });
                }}
                >
                001
            </Rnd>
        )
    }
}