import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Enterprise = new mongoose.Schema({
    lancamento: {//Breve lançamento, Lançamento, Em obras, Pronto pra morar
        type: String,
        required: true
    },
    nomeEmpreendimento: {
        type: String,
        required: true
    },
    residencial: {//Comercial, Residencial
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
});

Enterprise.plugin(mongoosePaginate);

export default mongoose.model('enterprise', Enterprise);