import { Configuration, OpenAIApi } from 'openai';

module.exports = {
    index,
}

async function index(req, res) {
    try{
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const newQuestion = req.query.question;
        
        const openai = new OpenAIApi(configuration);

        let options = {
            model: 'text-davinci-003',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['/'],
        };
    
        let completeOptions = {
            ...options,
            prompt: newQuestion,
        };
    
        const response = await openai.createCompletion(completeOptions);
        res.json(response);

    } catch(err) {
        res.status(400).json(err)
    }
}