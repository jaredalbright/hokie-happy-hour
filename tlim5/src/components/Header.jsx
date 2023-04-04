import { Heading, Image, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <>
        <Heading color='white' marginBottom='1rem'>
            Talk To Me Like I'm 5
        </Heading>
        <Text fontSize={25} textAlign='center'>
            Paste in your technical explanation below and this will simplify it
        </Text>
        </>
    )
}

export default Header
