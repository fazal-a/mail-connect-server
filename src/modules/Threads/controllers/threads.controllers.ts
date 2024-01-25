import  {Request, Response} from "express";
import * as ThreadsServices from "../services/Threads.service";

export default {
    fetchThreadsList: async (req: Request, res: Response) => {
        try {
            console.log("i am in fetch threads list controller start");
            const tokens = req.body.tokens;
            const threadsList = await ThreadsServices.fetchThreadsList(tokens);
            console.log("threadsList::",threadsList)
            if (threadsList) {
                res.status(200).json(threadsList);
            }else{
                res.status(404).json({error: "failure in fetching threads list"});
            }
            console.log("i am in fetch threads list controller end");
        } catch (e: any) {
            res.status(500).json({error: e.message});
        }
    },
    fetchThreadDetails: async (req: Request, res: Response) => {
        try {
            console.log("i am in fetch threads detail controller start");
            const gotID = req.params.id;
            const tokens = req.body.tokens;

            console.log("i am in fetch threads detail gotID::",gotID);
            const threadDetails = await ThreadsServices.fetchThreadDetails(gotID, tokens);
            console.log("threadDetails::",threadDetails)
            if (threadDetails) {
                res.status(200).json(threadDetails);
            }else{
                res.status(404).json({error: "failure in fetching threads details controller response"});
            }
            console.log("i am in fetch threads details controller end");
        } catch (e: any) {
            res.status(500).json({error: e.message});
        }
    }

};