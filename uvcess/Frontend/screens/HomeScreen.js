import React, { useState } from 'react'
import { Box, Heading, Stack, VStack, Center, Button, Input, Link, FormControl, Spinner, Text } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../Actions'
import Home from '../Components/Home'
import AlertComp from '../Components/AlertComp'

export default function HomeScreen(props) {
    
    const [name, setName] = useState('')
    const [rollNo, setRollNo] = useState('')

    const dispatch = useDispatch()

    const studentLogin = useSelector(state => state.studentLogin)
    const { studentInfo, loading, error } = studentLogin;

    console.log(studentInfo);


    const submitHandler = (e) => {
        dispatch(loginAction(name, rollNo.toUpperCase()))
    }

    const linkHandler = (e) => {
        props.navigation.navigate("SignUp")
    }



    return (


        <Box w="100%" h="100%" p={ 10 } bg="#ccf3cc">
            {
                    !studentInfo ?
                    <Home {...props} />
                    :
                    <Stack >
                        <Center>

                            <Heading my={ 10 } color="#996ca7">
                                Login
                            </Heading>
                        </Center>
                        <Center>
                            {
                                loading ? <Spinner color="blue.500"></Spinner> :
                                    error ?
                                    <AlertComp error={ error } />:''
                            }
                        </Center>
                        <VStack>
                            <FormControl isRequired>

                                <Input type="text" isRequired my={ 5 } placeholder="Name" placeholderTextColor="#996ca7" borderColor="#996ca7" onChange={ (e) => setName(e.target.value) } />


                                <Input type="text" isRequired my={ 5 } placeholder="Roll no" placeholderTextColor="#996ca7" borderColor="#996ca7" onChange={ (e) => setRollNo(e.target.value) } />



                                <Button isLoading={loading?true:false} isDisabled={loading?true:false} bg="#477279" _text={ { color: 'white', fontWeight: "bold" } } my={ 10 } onPress={ submitHandler }>
                                {loading?null :"Log In"}
                                </Button>

                                <Link _hover={ {
                                    bg: "primary.100",
                                } } onPress={ (e) => linkHandler(e) } > are you new here ? <Text color="#477279">click </Text></Link>

                                <FormControl.ErrorMessage>Please fill all fields</FormControl.ErrorMessage> 


                            </FormControl>


                        </VStack>
                    </Stack>


            }
        </Box>

    )
}
