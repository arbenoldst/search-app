import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const fetchQuote = async (mood) => {
  const prompt = `Give me a quote that matches the mood: ${mood}.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
    max_tokens: 50,
  });

  return response.choices[0].message.content.text.trim();
};
