import { useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const TextInput = ({ simplifyText }) => {
    const [text, setText] = useState('')

    const toast = useToast()

    const submitText = () => {
        if (text === '') {
            toast({
                title: 'Text field is empty.',
                description: 'Please enter some text simplify.',
                status: 'error',
                duration: 5000,
                isClosable: false,
            });
            return;
        }

        simplifyText(text);
    };

    return (
        <>
            <Textarea bg='darkseagreen'
                padding={4}
                marginTop={6}
                height={200}
                color='white'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Button
                bg='darkseagreen'
                color='white'
                marginTop={4}
                width='100%'
                _hover={{ bg: 'slategrey' }}
                onClick={submitText}
            >
                Simplify Me Daddy
            </Button>


        </>
    )
}

export default TextInput