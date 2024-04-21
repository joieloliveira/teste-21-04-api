import mongoose, { Connection } from 'mongoose';

class DataBase {
    mongoDBConnection: Promise<void> | Connection

    constructor() {
        this.mongoDataBase();
    }

    mongoDataBase() {
        this.mongoDBConnection = mongoose.connect('mongodb://127.0.0.1/enterprise', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conexão com MongoDB realizada com sucesso!");
        }).catch((erro: any) => {
            console.log("Erro: Conexão com MongoDB não foi realizada com sucesso: " + erro);
        });
    }
}

export default new DataBase();

//'mongodb+srv://joieloliveira:jo131012@cluster0.zqnjq.mongodb.net/test'
//this.mongoDBConnection = mongoose.connect('mongodb://localhost/meushopee', {
//this.mongoDBConnection = mongoose.connect('mongodb://54.237.1.90/meushopee', {