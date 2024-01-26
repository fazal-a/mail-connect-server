import {Request, Response} from "express";
import * as AuthService from "../services/auth.services";

export default {
    getAuthorizeUrl: async (req: Request, res: Response) => {
        try {
            const authorizeUrl: String = await AuthService.getAuthorizeUrl();
            console.log('success in in getting authorizeUrl::', authorizeUrl)
            res.status(200).json({"url": authorizeUrl});
        } catch (e: any) {
            console.log('failure in in getting authorizeUrl error::', e)
            res.status(500).send(e.message);
        }
    },

    getToken: async (req: Request, res: Response) => {
        try {
            const {code} = req.body;
            console.log("authCode in getToken function from params code::", code)
            if (code) {
                const tokens: String = await AuthService.getToken(code);
                console.log('success in in getting token::', tokens)
                res.status(200).json(tokens);

            } else {
                console.log("in else section of getToken function of auth.controller")
                res.status(500).send('failure and i am in else section of getToken');

            }
        } catch (e: any) {
            console.log('failure in in getting token error::', e)
            res.status(500).send(e.message);
        }
    },
};