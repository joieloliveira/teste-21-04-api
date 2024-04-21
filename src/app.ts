import express from 'express';
import routes from './routes';
import cors from 'cors';

import './config/conexao';

class App{
    public app: any;

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());

        this.app.use((req: any, res: any, next: any) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Origin", "http://localhost:3000");
            res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE'); 
            res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
            res.header("Access-Control-Allow-Credentials", true);
            this.app.use(cors());
            next();
        })       

    }
    routes(){
        this.app.use(routes);
    }
}

export default new App().app;