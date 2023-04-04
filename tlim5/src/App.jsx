import './App.css'
import { Container, Box, Tr } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/TextInput'
import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai"

function App() {
  const [complexText, setComplexText] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const simplifyText = async (text) => {
    setLoading(true)
    setIsOpen(true)
    
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const json = await response.json();
      console.log(response)
      console.log(json.text);
      setComplexText(json.text);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box bg='seagreen' color='white' height='100vh' width='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput simplifyText={simplifyText} />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
