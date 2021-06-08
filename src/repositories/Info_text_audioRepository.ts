import { EntityRepository, Repository } from "typeorm";
import { Info_text_audio } from "../entities/Info_text_audio";

@EntityRepository(Info_text_audio)
class Info_text_audioRepository extends Repository<Info_text_audio> {

}

export { Info_text_audioRepository }