import express from 'express';
import App from './services/ExpressApp';
import 'dotenv/config'
import mongoose from "mongoose"

const StartServer = async () => {

    const app = express();

 

    await App(app);

    const PORT = process.env.PORT;


    app.listen(PORT, () => {
        console.log(`Server Listening on Port  ${PORT}`);
    })
}

StartServer();