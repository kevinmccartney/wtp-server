import React from 'react';
import is from 'is_js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlayCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle';
import faPauseCircle from '@fortawesome/fontawesome-free-solid/faPauseCircle';
import faBackward from '@fortawesome/fontawesome-free-solid/faBackward';
import faForward from '@fortawesome/fontawesome-free-solid/faForward';

class Party extends React.Component {
  static async fetchUserData() {
    const req = await fetch('/api/me', { credentials: 'same-origin' });
    const reqJson = await req.json();

    return reqJson;
  }

  static async fetchPlayerStatus() {
    const req = await fetch('/api/me/player', { credentials: 'same-origin' });
    const reqJson = await req.json();

    return reqJson;
  }

  static async playPlayer() {
    const req = await fetch('/api/me/player/play', { credentials: 'same-origin' });
    const reqJson = await req.json();

    return reqJson;
  }

  static async pausePlayer() {
    const req = await fetch('/api/me/player/pause', {
      credentials: 'same-origin',
      method: 'POST',
    });
    const reqJson = await req.json();

    return reqJson;
  }

  constructor() {
    super();

    this.state = {
      user: null,
      player: null,
    };
  }

  async componentDidMount() {
    const userData = await Party.fetchUserData();
    const playerData = await Party.fetchPlayerStatus();

    // eslint-disable-next-line
    this.setState({
      user: userData,
      player: playerData,
    });
  }

  async updatePlayerStatus() {
    const playerStatus = await Party.fetchPlayerStatus();

    this.setState({
      player: playerStatus,
    });
  }

  renderPlayPause() {
    console.log(this.state)
    // const hasBody = is.existy(this.state.player.body);

    // if (hasBody) {
    //   const { body } = this.state.player;

    //   const icon = body.isPlaying ? faPauseCircle : faPlayCircle;
    //   const callback = body.isPlaying ? Party.pausePlayer() : Party.playPlayer();

    //   return (
    //     <FontAwesomeIcon
    //       icon={icon}
    //       aria-hidden="true"
    //       onClick={async () => {
    //         await callback();
    //         this.updatePlayerStatus();
    //       }}
    //       className="mx-2 text-primary"
    //       style={{
    //         verticalAlign: 'initial',
    //         fontSize: '2rem',
    //       }}
    //     />
    //   );
    // }

    return (
      <FontAwesomeIcon
        icon={faPlayCircle}
        aria-hidden="true"
        onClick={async () => {
          await Party.pausePlayer();
          this.updatePlayerStatus();
        }}
        className="mx-2 text-primary"
        style={{
          verticalAlign: 'initial',
          fontSize: '2rem',
        }}
      />
    );
  }

  render() {
    return (
      <div
        className="w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-light"
      >
        <section
          className="container bg-white"
        >
          <div className="p-5">
            <div>
              {this.state.user && JSON.stringify(this.state.user, null, 2)}
            </div>
            <div>
              {this.state.player && JSON.stringify(this.state.player, null, 2)}
            </div>
            <div
              className="d-flex flex-row justify-content-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faBackward}
                onClick={() => console.log('Time to go back')}
                className="text-primary"
                style={{
                  fontSize: '2rem',
                }}
              />
              {this.renderPlayPause()}
              <FontAwesomeIcon
                icon={faForward}
                onClick={() => console.log('Time to go forward')}
                className="text-primary"
                style={{
                  fontSize: '2rem',
                }}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Party;
