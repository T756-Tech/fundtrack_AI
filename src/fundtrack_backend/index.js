const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const OPENAI_API_KEY = ''; // Replace with your actual OpenAI API key

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/ai-query', async (req, res) => {
    const userQuery = req.body.query;

    const aiResponse = await getAIResponse(userQuery);

    res.json({ response: aiResponse });
});

const getAIResponse = async (query) => {
    // Integrate your AI logic here
    // Example using a mock response
    return `Here is the AI-generated response for: "${query}"`;
};

app.listen(3000, () => {
  console.log('Server running on port 3000');
});