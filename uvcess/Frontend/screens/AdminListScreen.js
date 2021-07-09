import React, { useState } from 'react'
import { Text, Box, Button, Select, Heading, CheckIcon, FlatList } from 'native-base'
import { useDispatch } from 'react-redux'

export default function AdminListScreen() {
    const [type, setType] = useState("students")



    const dispatch = useDispatch()

    const adminList = useSelector(state => state.adminList)
    const { loading, error, membersList: list } = adminList;


    return (
        <>
            <Box flexDirection="row" justifyContent="space-around" my={ 5 }>
                <Button bg="#34fcfc" mx={ 4 }>Add Member</Button>
                <Button bg="#34fcfc">Complaints_</Button>
            </Box>
            <Heading color="#9d87b1">
                { `${type === "materialOther" ? "other" : type}`.toUpperCase() }
            </Heading>
            <Box flexDirection="row" mx={ 8 }>
                <Select
                    w="80%"
                    my={ 3 }
                    w="90%"
                    selectedValue={ type }
                    minWidth={ 200 }
                    accessibilityLabel="Select semester"
                    onValueChange={ (itemValue) => setType(itemValue) }
                    _selectedItem={ {
                        bg: "gray.500",
                        endIcon: <CheckIcon size={ 4 } />,
                    } }
                >
                    <Select.Item label="students" value="students" />
                    <Select.Item label="crs" value="crs" />
                    <Select.Item label="members" value="members" />
                    <Select.Item label="material" value="material" />
                    <Select.Item label="other" value="materialOther" />
                </Select>
                <Button w="20%" bg="green.400" m={ 3 } onPress={ (e) => getHandler(e) } >Get</Button>
            </Box>

            {
                loading ? <Spinner color="gray.500" ></Spinner> :
                    success && materialInfo.length === 0 && <AlertComp error="No Information found (Click 'Get')" />
            }

            <FlatList
                data={ list }
                renderItem={ ({ item }) => (
                    <Box px={ 5 } flexDirection="row" py={ 2 } w={ 300 } rounded="md" my={ 2 } bg="green.100">
                        <Box flex={ 1 }>

                            <Box p={ 1 } flex={ 1 }>
                                <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Subject-Name</Text>
                                <Text color="#609546" fontSize={ 12 } fontWeight="bold" overflow="hidden">{ item.subject }</Text>
                            </Box>
                            <Box flex={ 1 }>
                                <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Professer</Text>
                                <Text fontSize={ 12 } color="#609546" fontWeight="bold">{ item.professor }</Text>
                            </Box>
                        </Box>
                        <Box flex={ 1 }>
                            <Button my={ 1 } py={ 1 } bg="green.500" fontSize={ 12 } onPress={ (e) => downloadHandler(e) }>Download</Button>
                            <Button my={ 1 } py={ 1 } bg="yellow.300" onPress={ (e) => viewHandler(e) } >View</Button>
                        </Box>
                    </Box>

                ) }
                keyExtractor={ (item) => item._id }
            />
        </>
    )
}
