// export const authEndpoint = "https://accounts.spotify.com/authorize?";

// // Replace with your app's client ID, redirect URI and desired scopes
// export const clientId = "96fddf30b44b417e8427c597040731cc";

// // if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
// //     export const redirectUri = "http://localhost:3000/callback";
// // } else {
// //     export const redirectUri = "http://localhost:3000/callback";
// // }
// export const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];
// LOCAL_DOMAINS.includes(window.location.hostname) ? alert(window.location.hostname) : alert(window.location.hostname);

// let redirectUrl = LOCAL_DOMAINS.includes(window.location.hostname) ? "http://localhost:3000/musicmaster/callback" : `${window.location.hostname}/musicmaster/callback`;
// export const redirectUri = redirectUrl;

// // export const redirectUri = "http://localhost:3000/callback";
// export const responseType = "token";
// export const showDialog = "false";
// export const scopes = [
//     "user-top-read",
//     "user-read-currently-playing",
//     "user-read-playback-state",
// ];

export const TOKEN = 'BQA-x_WO9f986p7wn5BrbJGChE4QqBuVbh5iaqgauyfwjX6P27X2yYeBeJY5N3CWeheENaLcZpzjU8J2GG8pkdinOH6NFzhdBXprxa5yiKO0isVKQXz5IKKRa6C7_x2eFV5J7CTRTRYgde7X0P68b6VRhIhf9KBdEIRIylvWva4bN0HDCO8LbYzonoaKG0d7GNOqNBwDPz9mVEht';
export const REFRESH_TOKEN = 'AQAlIuF03grT4SbMDAkLRBjjTsaI37dWK4U9wQf4bKg3d_iO3thRgoOiOHCR6LabfSANHP9bjh4LO5oimbREF4Z0Vs2qP_XQBzoMvgxSsMG7jfMyPYLTfeE3c8Hcim1Ti8I'
export const AUTH_TOKEN = `Bearer ${TOKEN}&refresh_token=${REFRESH_TOKEN}`;
// export const auth_token = 'Bearer BQA-x_WO9f986p7wn5BrbJGChE4QqBuVbh5iaqgauyfwjX6P27X2yYeBeJY5N3CWeheENaLcZpzjU8J2GG8pkdinOH6NFzhdBXprxa5yiKO0isVKQXz5IKKRa6C7_x2eFV5J7CTRTRYgde7X0P68b6VRhIhf9KBdEIRIylvWva4bN0HDCO8LbYzonoaKG0d7GNOqNBwDPz9mVEht&refresh_token=AQAlIuF03grT4SbMDAkLRBjjTsaI37dWK4U9wQf4bKg3d_iO3thRgoOiOHCR6LabfSANHP9bjh4LO5oimbREF4Z0Vs2qP_XQBzoMvgxSsMG7jfMyPYLTfeE3c8Hcim1Ti8I';
