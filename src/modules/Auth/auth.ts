import { OAuth2Client } from 'google-auth-library';

const oAuth2Client = new OAuth2Client({
    clientId: '858871017230-f7qoe7dpqj202r3p6ucrca3g8jrgj176.apps.googleusercontent.com',
    clientSecret: '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',
    redirectUri: 'http://localhost:3000/auth',
});
export const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.readonly'], // Adjust scopes based on your needs
});

// Redirect users to this URL for authorization
console.log('Authorize this app by visiting:', authorizeUrl);

// Once the user grants permission, exchange the authorization code for credentials

// const token = await oAuth2Client.getToken('AUTHORIZATION_CODE');
// oAuth2Client.setCredentials(token.tokens);
