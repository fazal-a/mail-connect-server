import  {Request, Response} from "express";
import * as UserService from "../services/User.service";
// GET users

export default {
    getUser: async (req: Request, res: Response) => {
        try {
            const userProfile = await UserService.find();
            if (userProfile) {
                res.status(200).send(userProfile);
            }
            res.status(404).send("user not found");
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    },
};