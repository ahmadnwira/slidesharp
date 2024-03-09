import axios from 'axios';

interface Message {
  role: string; //'system' | 'user';
  content: string;
}

export const sendOpenAi = async (messages: Message[], max = 1000, temp = 1) => {
  const url = 'https://api.openai.com/v1/chat/completions';

  const body = JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages,
    max_tokens: max,
    temperature: temp
  });

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(url, body, options);

    const answer = res.data.choices[0].message.content;
    const usage = res?.data?.usage;

    console.log('OpenAI GPT-3.5-turbo usage:', usage);
    console.log('OpenAI GPT-3.5-turbo response:', answer);
    console.log('\n\n');

    return answer;
  } catch (e) {
    console.error('GPT Error: ' + e?.response?.status, e?.response?.data);
    return null;
  }
};
