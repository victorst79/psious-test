import React from 'react';
import { Rnd } from "react-rnd";

interface asd{
    x: any,
    y: any,
    width: any,
    height: any,
}


const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "solid 5px #ddd",
    borderRight: "solid 5px #ddd",
    borderTop: "solid 1px #ddd",
    borderBottom: "solid 1px #ddd",
    background: "#f0f0f0",
    height: "100%",
    zIndex: 9999
  };
export default class File extends React.Component<{}, asd> {
    constructor(props: {}) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            width: 200,
            height: 50,
        }
      }
      
    render() {
        return (
            <Rnd
            style={style}
                size={{ width: this.state.width,  height: this.state.height }}
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
                File 001
            </Rnd>
        )
    }
}