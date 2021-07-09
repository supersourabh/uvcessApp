import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, ScrollView, Stack, VStack, FormControl, Input, Button, Link, Center, Heading, Text, Spinner, Select, CheckIcon, Checkbox, useToast } from 'native-base'
import { signupAction } from '../Actions'
import AlertComp from '../Components/AlertComp'



export default function SignUpScreen(props) {

    const [name, setName] = useState()
    const [rollNo, setRollNo] = useState()
    const [cr, setCr] = useState(false)
    const [branch, setBranch] = useState("Mechanical")
    const [sem, setSem] = useState("1")
    const [crContact, setCrContact] = useState(null)


    const studentRegister = useSelector(state => state.studentRegister)
    const { loading, error, success, studentInfo } = studentRegister;

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signupAction({ name, rollNo, cr, branch, sem, crContact }))
    }

    const linkHandler = (e) => {
        //dispatch(signupAction({name , rollNo , cr , branch , sem , crContact}))
    }

    const toast = useToast()


    return (
        <ScrollView w="100%" px={ 10 } >
            {
                !success ?
                    <Stack w="100%"  >
                        <Center>
                            <Heading mt={ 10 } color="#cc98cc">
                                Welcome to UVCE_SS
                            </Heading>
                            <Text my={ 3 } bold color="#a3a1c3">Sign Up to continue!</Text>
                        </Center>
                        <Center>
                            {
                                loading ? <Spinner color="blue.500"></Spinner> :
                                    error ? <AlertComp error={ error } /> : null

                            }
                            {/* () => toast.show({ title: "You are signed in successfully ", placement: "bottom" }) : '' */ }
                        </Center>
                        <VStack>
                            <FormControl isRequired key="12345">
                                <FormControl.HelperText color="#b75644">
                                    Please fill all the fields
                                </FormControl.HelperText>

                                <Input type="text" my={ 5 } placeholder="Name" placeholderTextColor="#996ca7" borderColor="#996ca7" onChange={ (e) => setName(e.target.value) } />


                                <Input type="text" isRequired my={ 5 } placeholder="Roll no" placeholderTextColor="#996ca7" borderColor="#996ca7" onChange={ (e) => setRollNo(e.target.value) } />

                                <Select
                                    borderColor="#996ca7"
                                    my={ 5 }
                                    w="100%"
                                    selectedValue={ sem }
                                    minWidth={ 200 }
                                    accessibilityLabel="Select semester"
                                    onValueChange={ (itemValue) => setSem(itemValue) }
                                    _selectedItem={ {
                                        bg: "gray.500",
                                        color: "#996ca7",
                                        endIcon: <CheckIcon size={ 4 } />,
                                    } }
                                >
                                    <Select.Item label="1" value="1" />
                                    <Select.Item label="2" value="2" />
                                    <Select.Item label="3" value="3" />
                                    <Select.Item label="4" value="4" />
                                    <Select.Item label="5" value="5" />
                                    <Select.Item label="6" value="6" />
                                    <Select.Item label="7" value="7" />
                                    <Select.Item label="8" value="8" />

                                </Select>


                                <Select
                                    borderColor="#996ca7"
                                    my={ 5 }
                                    w="100%"
                                    selectedValue={ branch }
                                    minWidth={ 200 }
                                    accessibilityLabel="Select semester"
                                    onValueChange={ (itemValue) => setBranch(itemValue) }
                                    _selectedItem={ {
                                        bg: "gray.500",
                                        color: "#996ca7",
                                        endIcon: <CheckIcon size={ 4 } />,
                                    } }
                                >
                                    <Select.Item label="Mechanical" value="Mechanical" />
                                    <Select.Item label="Civil" value="Civil" />
                                    <Select.Item label="Electronics" value="Electronics" />
                                    <Select.Item label="Computer-Science" value="Computer-Science" />
                                    <Select.Item label="Electrical" value="Electrical" />
                                    <Select.Item label="Information Science" value="Information Science" />

                                </Select>

                                <Box flexDirection="row" justifyContent="flex-start">
                                    <Checkbox ml={ 1 } mr={ 2 } mb={ 3 } value={ cr } onChange={ (e) => setCr(!cr) } />
                                    <Text>Class-Representative ?</Text>
                                </Box>
                                {
                                    cr &&
                                    <Input type="tel" keyboardType="number-pad" my={ 5 } placeholder="Contact" placeholderTextColor="#996ca7" borderColor="#996ca7" onChange={ (e) => setCrContact(e.target.value) } />
                                }



                                <Button isLoading={ loading ? true : false } isDisabled={ loading ? true : false } bg="#477279" _text={ { color: 'white', fontWeight: "bold" } } mb={ 10 } onPress={ submitHandler }>
                                    { loading ? null : "Sign Up" }
                                </Button>

                                <Button bg="#477279" _text={ { color: 'white', fontWeight: "bold" } } mb={ 30 } onPress={ (e) => props.navigation.navigate("UVCE_SS") }>
                                    Log In
                                </Button>

                            </FormControl>


                        </VStack>
                    </Stack>
                    :
                    () =>
                        toast.show({
                            title: `hii...${studentInfo.name}You are signed in successfully `,
                            placement: "bottom"
                        })

            }
        </ScrollView >
    )
}
