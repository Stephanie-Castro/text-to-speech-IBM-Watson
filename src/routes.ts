import { Router } from "express";
import { Info_text_audioController } from "./controlles/Info_text_audioController";

const routes = Router();

const info_text_audioController = new Info_text_audioController();

routes.post("/info_text_audio", info_text_audioController.create);
routes.get("/info_text_audio", info_text_audioController.findAll);

export { routes };