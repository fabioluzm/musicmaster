export const authEndpoint = "https://accounts.spotify.com/authorize?";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "96fddf30b44b417e8427c597040731cc";
export const redirectUri = "http://localhost:3000/callback";
export const responseType = "token";
export const showDialog = "false";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];