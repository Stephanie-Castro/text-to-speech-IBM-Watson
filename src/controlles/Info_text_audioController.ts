import { Request, Response } from "express"; 
import { Info_text_audioService } from "../services/Info_text_audioServices";

/**
 * Tipos de paramêtros:
 * Route Params => parâmetros de rotas
 *      http:/localhost:3000/info_text_audio/1
 * Query Params => filtros e buscas
 *      http:/localhost:3000/info_text_audio/1?search=algumacoisa
 * Body Params =>  passa objetos nas requisições 
 *      {
 *      }
 */

class Info_text_audioController {
    async create(request: Request, response: Response) {
        
        const { text_value } = request.body;

        const info_text_audioService = new Info_text_audioService();

        try{
            const info_text_audio = await info_text_audioService.create({ text_value });
            return response.json(info_text_audio);
        }catch(err){
            return response.status(400).json({
                message: err.message
            })
        } 



    }

    async findAll(request: Request, response: Response) {
        //const { text_value, file_name } = request.body;

        const info_text_audioService = new Info_text_audioService();

        try{
            const info_text_audio = await info_text_audioService.findAll();
            return response.json(info_text_audio);
        }catch(err){
            return response.status(400).json({
                message: err.message
            })
        }

    }
    
}

export { Info_text_audioController }