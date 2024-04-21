import * as Yup from 'yup';
import { Request, Response } from 'express';
import Enterprise from '../models/Enterprise';

class EnterprisesController {

    async show(req: Request, res: Response): Promise<void> {
        try {
            const enterprises = await Enterprise.find({});

            return res.json({
                error: false,
                enterprises: enterprises
            });
        } catch (error) {
            return res.status(400).json({
                error: true,
                code: 101,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        }
    }

    async index(req: Request, res: Response): Promise<void> {
        const dados = req.params;
        try {
            const enterprise = await Enterprise.findById({_id: dados.id});

            if (enterprise) {
                return res.json({
                    error: false,
                    enterprise: enterprise
                });
            }
        } catch (error) {
            return res.status(400).json({
                error: true,
                code: 102,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        }
    }

    async store(req: Request, res: Response): Promise<void> {
        const schema = Yup.object().shape({
            lancamento: Yup.string()
                .required(),
            nomeEmpreendimento: Yup.string()
                .required(),
            residencial: Yup.string()
                .required(),
            cep: Yup.string()
                .required(),
            rua: Yup.string()
                .required(),
            bairro: Yup.string()
                .required(),
            cidade: Yup.string()
                .required(),
            estado: Yup.string()
                .required(),
            numero: Yup.string()
                .required(),
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: true,
                code: 103,
                message: "Error: Dados inválidos!"
            });
        };

        const dados = req.body;

        try {
            const enterprise = await Enterprise.create(dados);

            return res.json({
                error: false,
                enterprise: enterprise
            });
        } catch (error) {
            return res.status(400).json({
                error: true,
                code: 104,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        const dados = req.body;
        try {
            const enterprise = await Enterprise.updateOne({_id: req.params.id}, dados);

            return res.json({
                error: false,
                enterprise: enterprise
            });
        } catch (error) {
            return res.status(400).json({
                error: true,
                code: 104,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        const dados = req.params;
        try {
            const enterprise = await Enterprise.deleteOne({ _id: dados.id });

            return res.json({
                error: false,
                enterprise: enterprise
            });
        } catch (error) {
            return res.status(400).json({
                error: true,
                code: 104,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        }
    }

}

export default new EnterprisesController();