import React from 'react'
import { Box, Container, Center, Text, Button ,Image} from 'native-base'
import LottieView from 'lottie-react-native';
import Lottie from './Lottie';

export default function Home(props) {
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }




    return (
        <Box w="100%" h="100%">
            <Container flexDirection='row'>
                <Text color="#81748c" fontSize={ 25 } fontWeight={ 100 } bold >Make your Future, </Text>
                <Text color="#76c157" fontSize={ 25 } fontWeight={ 300 } bold >Greener</Text>
            </Container>
            {/* <Center>
                <Text  color="#f0f0f0" fontSize={ 50 } fontWeight={ 300 }>Welcome to </Text>
            </Center>
            <Center>
                <Text color="#7b367bcc" bold fontFamily="" fontSize={ 100 } fontWeight={ 500 }  >UVCE</Text>
                <Text color="#a396f6" bold fontSize={ 20 } fontWeight={ 200 }  >{ "               " }Since 1917</Text>
            </Center>
            */}
            <Center>
                <Text color="#98a098" fontSize={ 20 } px={ 5 }>Study with support </Text>
            </Center>
            <Center>
                {/* <Lottie/> */}
                {/* <LottieView source={ require('../../lottie/66956-m-logo.json') } autoPlay loop /> */}
            </Center>
            <Center>
                <Button _text={{color :"#f6f3f9"}} bg="#76c157" w="100%" fontSize={ 20 } px={ 5 } onPress={(e)=>props.navigation.openDrawer()}>Acess Things</Button>
            </Center>
        </Box>
    )
}
