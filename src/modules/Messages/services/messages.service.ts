import axios from "axios";
// import {oAuth2Client} from "../../../Shared/Utils/OAuth2Clinet";

import { OAuth2Client } from "google-auth-library"; // Assuming this is the library you're using

export const fetchMessagesList = async (tokens:any): Promise<any> => {
    try {
        const client = new OAuth2Client();
        client.setCredentials(tokens);
        console.log("i am in fetch messages list function");
        const response = await axios.get('https://gmail.googleapis.com/gmail/v1/users/me/messages', {
            headers: {
                Authorization: `Bearer ${client.credentials.access_token}`,
            },
        });
        // console.log("i am in fetch threads list function response.data::",response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error in getting messages::', error.message);
        return null;
    }
}
export const fetchMessageDetails = async (gotID: string, tokens:any): Promise<any> => {
    try {
        const client = new OAuth2Client();
        client.setCredentials(tokens);
        console.log("i am in fetch message details function");
        const response = await axios.get('https://gmail.googleapis.com/gmail/v1/users/me/messages/'+gotID, {
            headers: {
                Authorization: `Bearer ${client.credentials.access_token}`,
            },
        });
        // console.log("i am in fetch threads details function response.data::",response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error in getting message details:', error.message);
        return null;
    }
}
