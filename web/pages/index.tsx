// import Head from 'next/head'

import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/core'
import Divider from '../components/Divider'
import Input from '../components/Input'
import {useColorMode, IconButton} from '@chakra-ui/core'


export default function Home() {
  const { colorMode, toggleColorMode} = useColorMode();
  const ThemeSelector:React.FC = () => {
		
		return(
				<IconButton marginTop="10px" marginLeft="10px" aria-label="" maxWidth="20px" icon={colorMode === 'light'?'moon':'sun'} onClick={toggleColorMode}/>

		)
	};
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 450px 1fr"
      templateAreas="

        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
      backgroundColor={colorMode==='light'?'blue.100':'blue.900'}
      
    >
      <ThemeSelector/>
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start"  
      >
        
        <Heading size="2xl" lineHeight="shorter" marginTop={16} color={colorMode==='light'?'gray.800':'white'}>
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex 
        gridArea="form"
        height="100%"
        backgroundColor={colorMode==='light'?'blue.300':'blue.800'}
        borderRadius="md"
        flexDir="column"
        
        padding={16}
        
        width="100%"
      >
        <Input
          placeholder="E-mail"
          color={colorMode==='light'?'black':'white'}
          backgroundColor={colorMode==='light'?'grey.900':'black'}
          
        />

        <Input
          placeholder="Senha"
          marginTop={2}
          color={colorMode==='light'?'black':'white'}
          backgroundColor={colorMode==='light'?'grey.900':'black'}
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="white"
          fontWeight="bold"
          _hover={{ color: 'blue.500' }}
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor={colorMode==='dark'?'blue.500':'blue.600'}
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'blue.700' }}
          color="white"
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="blue.600"
            fontWeight="bold"
            _hover={{ color: 'blue.100' }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm" color="white">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="blue.500"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'blue.700' }}
            color="white"
            
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}