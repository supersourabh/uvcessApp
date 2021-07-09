import React, { useState } from 'react'
import { Box, FlatList, Center, Stack, HStack, Text, Select, CheckIcon, Button, Spinner,useToast } from "native-base"
import { syllabusAction } from '../Actions'
import AlertComp from '../Components/AlertComp'
import { useDispatch, useSelector } from 'react-redux'



export default function StudyMaterialListScreen(props) {

    const syllabusMaterial = useSelector(state => state.syllabusMaterial)
    const { materialSyllabusInfo, loading, error, success } = syllabusMaterial;

    const studentLogin = useSelector(state => state.studentLogin)
    const { studentInfo } = studentLogin;

    const [sem, setSem] = useState("1")
    const [count, setCount] = useState(1)
    const [type, setType] = useState("Syllabus")
    const branch = studentInfo.branch

    const dispatch = useDispatch()

    const toast =useToast()



    const getHandler = (e) => {
        dispatch(syllabusAction(type, sem, branch))
        if(error&& !toast.isActive()){
            toast.show({
                title : `${error}`,
                placement : "bottom",
                status: "danger"
            })
        }
        if (loading) {
            toast.show({
                title: 'Please wait...',
                placement: "top",
                color : "gray.700",
                backgroundColor:"#ffffff00"
            })
        }
       

    }
   
    const downloadHandler = (e) => {
        //
    }
    const viewHandler = (e) => {
        //
    }

    return (
        <>

            <Select
                w="90%"
                my={2}
                selectedValue={ sem }
                minWidth={ 200 }
                accessibilityLabel="Select semester"
                onValueChange={ (itemValue) => setSem(itemValue) }
                _selectedItem={ {
                    bg: "gray.500",
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
                w="90%"
                selectedValue={ type }
                minWidth={ 200 }
                accessibilityLabel="Select Type"
                onValueChange={ (itemValue) => setType(itemValue) }
                _selectedItem={ {
                    bg: "gray.500",
                    endIcon: <CheckIcon size={ 4 } />,
                } }
            >
                <Select.Item label="Syllabus" value="Syllabus" />
                <Select.Item label="Time-table" value="Time-table" />


            </Select>


            <Button bg="blue.300" my={ 5 } w={ 200 } onPress={ (e) => getHandler(e) } >Get</Button>


            {
                loading ? <Spinner color="gray.500" ></Spinner> :
                        success && materialSyllabusInfo.length === 0 && <AlertComp error="No Information found (Click 'Get')" />
            }

            <FlatList
                data={ materialSyllabusInfo }
                renderItem={ ({ item }) => (
                    <Box px={ 5 } flexDirection="row" py={ 2 } w={ 300 } rounded="md" my={ 2 } bg="green.100">
                        <Box flex={ 1 }>

                            <Box p={ 1 } flex={ 1 }>
                                <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Info</Text>
                                <Text color="#609546" fontSize={ 12 } fontWeight="bold" overflow="hidden">{ item.subject }</Text>
                            </Box>
                            <Box flex={ 1 }>
                                <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Branch & Sem </Text>
                                <Text fontSize={ 12 } color="#609546" fontWeight="bold">{ item.branch } , {item.sem}</Text>
                            </Box>
                        </Box>
                        <Box flex={ 1 }>
                            <Button my={ 1 } py={ 1 } bg="green.500" fontSize={ 12 } onPress={ (e) => downloadHandler(e) }>Download</Button>
                            <Button my={ 1 } py={ 1 } bg="yellow.300" onPress={ (e) => viewHandler(e) } >View</Button>
                        </Box>
                    </Box>

                ) }
                keyExtractor={ (item) => item.id }
            />
        </>
    )

}