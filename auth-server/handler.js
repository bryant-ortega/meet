"use strict";
// required packages
const { google } = require("googleapis");
const calendar = google.calendar("v3");

//“read-only access” was defined as the scope
const SCOPES = [
    "https://www.googleapis.com/auth/calendar.events.public.readonly",
];

//value being referred to is in the config.json file
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = ["https://bryant-ortega.github.io/meet/"];

//a new instance of the google.auth.OAuth2 method was called and created from variables in client_secret_<...>.json
const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    redirect_uris[0]
);

//created and exported using Node.js module.exports.
module.exports.getAuthURL = async () => {
    /**
     *
     * Scopes array is passed to the `scope` option.
     *
     */

     //allows you to seamlessly retrieve an access token, refresh it, and retry the request. 
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
    });

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
            authUrl,
        }),
    };
};
