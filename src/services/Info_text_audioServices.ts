
import { getCustomRepository } from "typeorm";
import { TextToSpeechIBM } from "../providers/TextToSpeechIBM";
import { Info_text_audioRepository } from "../repositories/Info_text_audioRepository";

import { v4 as uuid } from "uuid" //ao invés de usar v4, é melhor chamar de uuid, para ficar mais fácil de ler



interface IInfo_text_audioCreate {
  text_value: string;
}

class Info_text_audioService {
  
  async create({ text_value }: IInfo_text_audioCreate) {
    const info_text_audioRepository = getCustomRepository(
      Info_text_audioRepository
    );
  
    var file_name = uuid() + ".wav";
    var file_path = "audios/" + file_name;
    
    const textToSpeechIBM = new TextToSpeechIBM();
    const convert = await textToSpeechIBM.textToSpeech(text_value, file_path);

    const info_text_audio = info_text_audioRepository.create({
      text_value: text_value,
      file_name: file_name,
      file_path: file_path
    });

    await info_text_audioRepository.save(info_text_audio);

    return info_text_audio;
    
  }

  async findAll(){
    const info_text_audioRepository = getCustomRepository(
      Info_text_audioRepository
    );

    //select * from info_text_audio
    const list = await info_text_audioRepository.find();
    return list;
  }

}

export { Info_text_audioService };
