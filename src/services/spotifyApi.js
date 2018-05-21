import SpotifyWebApi from 'spotify-web-api-node';

import config from '../config';

const spotifyApi = new SpotifyWebApi({
  clientId: config.spotify.clientId,
  clientSecret: config.spotify.clientSecret,
  redirectUri: 'http://localhost:3000/auth/spotify/callback'
});

export default spotifyApi;
