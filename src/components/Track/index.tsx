import React from 'react';

export default class Track extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
        }
      }
      
    render() {
        return (
          <section className={'track'}>
            <div
                style={{
                width: "100%",
                height: "50px",
                border: "1px solid pink",
                position: "relative"
                }}
            >
                Track
            </div>
          </section>
        )
    }
}