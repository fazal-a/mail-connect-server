import {oAuth2Client} from "../../../Shared/Utils/OAuth2Clinet";
export const getAuthorizeUrl = async (): Promise<any> => {

    return oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.readonly'], // Adjust scopes based on your needs
    });
};

export const getToken = async (code: string): Promise<any> => {
    try {
            const { tokens } = await oAuth2Client.getToken(code);
        console.log('token from the auth.services getToken function tokens::',tokens)
            oAuth2Client.setCredentials(tokens);
            return tokens;

    } catch (error:any) {
        console.error('Error exchanging authorization code for tokens:', error.message);
        return 0;
    }
};
