export const authEndpoint = "https://accounts.spotify.com/authorize?";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "96fddf30b44b417e8427c597040731cc";

// if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
//     export const redirectUri = "http://localhost:3000/callback";
// } else {
//     export const redirectUri = "http://localhost:3000/callback";
// }
export const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];
LOCAL_DOMAINS.includes(window.location.hostname) ? alert(window.location.hostname) : alert(window.location.hostname);

let redirectUrl = LOCAL_DOMAINS.includes(window.location.hostname) ? "http://localhost:3000/musicmaster/callback" : `${window.location.hostname}/musicmaster/callback`;
export const redirectUri = redirectUrl;

// export const redirectUri = "http://localhost:3000/callback";
export const responseType = "token";
export const showDialog = "false";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];