import axios from "axios";
import {oAuth2Client} from "../../../Shared/Utils/OAuth2Clinet";

export const fetchThreadsList = async (): Promise<any> => {
    try {
        console.log("i am in fetch threads list function");
        const response = await axios.get('https://gmail.googleapis.com/gmail/v1/users/me/threads', {
            headers: {
                Authorization: `Bearer ${oAuth2Client.credentials.access_token}`,
            },
        });
        // console.log("i am in fetch threads list function response.data::",response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error in getting threads:', error.message);
        return null;
    }
}
export const fetchThreadDetails = async (gotID: string): Promise<any> => {
    try {
        console.log("i am in fetch threads details function");
        const response = await axios.get('https://gmail.googleapis.com/gmail/v1/users/teams.qau@gmail.com/threads/'+gotID, {
            headers: {
                Authorization: `Bearer ${oAuth2Client.credentials.access_token}`,
            },
        });
        // console.log("i am in fetch threads details function response.data::",response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error in getting thread details:', error.message);
        return null;
    }
}
