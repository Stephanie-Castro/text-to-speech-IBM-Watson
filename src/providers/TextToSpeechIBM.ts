require("dotenv/config");

const fs = require("fs");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.apikey,
  }),
  serviceUrl: process.env.serviceUrl,
});

class TextToSpeechIBM {
  async textToSpeech(text_value: string, file_path: string) {
    
    const response = await textToSpeech
      .synthesize({
        text: text_value,
        accept: "audio/wav",
        voice: "pt-BR_IsabelaVoice",
      })
      .then((response) => {
        // only necessary for wav formats,
        // otherwise `response.result` can be directly piped to a file
        return textToSpeech.repairWavHeaderStream(response.result);
      })
      .then((buffer) => {
        fs.writeFileSync("public/" + file_path, buffer);
      });
      
      
  }
}

export { TextToSpeechIBM };
