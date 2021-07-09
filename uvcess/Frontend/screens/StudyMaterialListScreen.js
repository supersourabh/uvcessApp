import React, { useState } from 'react'
import { Box, FlatList, Center, Stack, HStack, Text, Select, CheckIcon, Button, Spinner, useToast, Progress } from "native-base"
import { materialAction } from '../Actions'
import AlertComp from '../Components/AlertComp'
import { useDispatch, useSelector } from 'react-redux'
import * as FileSystem from 'expo-file-system';
import * as Notifications from "expo-notifications"
import { createStackNevigator } from "@react-navigation/stack"
import { PermissionsAndroid } from 'react-native'




export default function StudyMaterialListScreen(props) {

    const material = useSelector(state => state.material)
    const { materialInfo, loading, error, success } = material;

    const studentLogin = useSelector(state => state.studentLogin)
    const { studentInfo } = studentLogin;

    const [sem, setSem] = useState("1")
    const [count, setCount] = useState(1)
    const branch = "Mechanical"
    const [progressdown, setProgressdown] = useState("100")
    const [view, setView] = useState(false)

    const dispatch = useDispatch()

    const toast = useToast()




    const getHandler = (e) => {
        e.preventDefault()
        dispatch(materialAction(sem, branch, count))
        if (error) {
            toast.show({
                title: `${error}`,
                placement: "bottom",
                status: "danger"

            })
        }
        if (loading) {
            toast.show({
                title: 'Please wait...',
                placement: "top",
                backgroundColor: "#000"
            })
        }
    }






    function imageSrc(item) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(item.doc.data.data));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    const callback = downloadProgress => {
        const progress = (downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite) * 100;
        setProgressdown(progress)
    };



    const downloadHandler = async (item) => {


        const downloadResumable = FileSystem.createDownloadResumable(
            `https://uvcess.herokuapp.com/api/material/view/${item._id}`,
            `file:///storage/emulated/0/Download/${item.subject}.pdf`, {}, callback
        );
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "Storege permision required",
                message: "App needs Storege permision to access",
                buttonPositive: "Ok",
                buttonNegative: "cancel"

            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            alert("storage permistion granted")

            try {
                const uri = await FileSystem.writeAsStringAsync(`file:///storage/emulated/0/Download/${item.subject}.pdf`, imageSrc(item), { encoding: FileSystem.EncodingType.Base64 })
                console.log(uri);
            } catch (error) {
                alert(error)
            }
        }

    }


    return (
        <>

            <Select
                my={ 3 }
                w="90%"
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

            <Progress colorScheme="green.500" value={ progressdown } size="xl" />


            <Button bg="blue.300" my={ 5 } w={ 200 } onPress={ (e) => getHandler(e) } >Get</Button>


            {
                loading ? <Spinner color="gray.500" ></Spinner> :
                    success && materialInfo.length === 0 && <AlertComp error="No Information found (Click 'Get')" />

            }


            <FlatList
                data={ materialInfo }
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
                            <Button my={ 1 } py={ 1 } bg="green.500" fontSize={ 12 } onPress={ (e) => downloadHandler(item) }>Download</Button>
                            <Button my={ 1 } py={ 1 } bg="yellow.300" onPress={ (e) => props.navigation.navigate("View" , {id : item._id}) } >View</Button>
                        </Box>
                    </Box>

                ) }
                keyExtractor={ (item) => item._id }
            />
        </>
    )

}