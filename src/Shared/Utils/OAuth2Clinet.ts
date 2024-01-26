import {OAuth2Client} from "google-auth-library";

export const oAuth2Client = new OAuth2Client({
    clientId: '858871017230-f7qoe7dpqj202r3p6ucrca3g8jrgj176.apps.googleusercontent.com',
    clientSecret: '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',
    redirectUri: 'http://localhost:3000/login',
});