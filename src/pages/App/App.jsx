import Form from '../../components/Form/Form';
import Answer from '../../components/Answer/Answer';
import './App.css';
import { useState } from 'react';
import * as responseService from '../../utilities/response-api';

export default function App() {
  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
   const response = await responseService.getResponse(newQuestion)

    if (response.data.choices) {
        setStoredValues([
            {
                question: newQuestion,
                answer: response.data.choices[0].text,
            },
            ...storedValues,
        ]);
        setNewQuestion('');
  }
};

  return (
    <main className="App">
      App
      <Form generateResponse={generateResponse} />
      <Answer storedValues={storedValues} />
    </main>
  );
}
