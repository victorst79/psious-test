import React from 'react';
import Track from '../Track'
import File from '../File'
import './style.scss'

interface timeline {
  trackList: any;
}

export default class Timeline extends React.Component<{}, timeline>{

  constructor(props: {}) {
    super(props);
    this.state = {
      trackList: []
    }
  }

  addTrack = () => {
    this.setState({
      trackList: [...this.state.trackList, <Track key={`track-${this.state.trackList.length}`}/>]
    })
  }
 
    render() {
        return (
          <section className={'timeline'}>
            <div className={'fileBox'}>
              <File />
            </div>

            <button
              type="button"
              className="make-button-link"
              data-add-button=""
              onClick={this.addTrack}
            >
              Add Track
            </button>
            {this.state.trackList}
          </section>
        )
    }
}