import React, { useEffect } from 'react'
import { FlatList, Box, Text, Button, Spinner } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { membersAction } from '../Actions'
import AlertComp from '../Components/AlertComp'


export default function MembersListScreen() {

    const dispatch = useDispatch()


    const members = useSelector(state => state.members)
    const { loading, error, membersList, success } = members;

    useEffect(() => {
        if (!success) {
            dispatch(membersAction())
        }

    }, [])




    return (
        <>
            {
                loading ? <Spinner color="blue.300" /> :
                    error ? <AlertComp error={ error } /> : null

            }
            
            <FlatList
                data={ membersList }
                renderItem={ ({ item }) => (
                    <Box px={ 5 } flexDirection="row" py={ 2 } w={ 330 } rounded="md" my={ 2 } bg="#edd3ef">

                        <Box p={ 1 } flex={ 1 }>
                            <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Name</Text>
                            <Text color="#609546" fontSize={ 12 } fontWeight="bold" overflow="hidden">{ item.name }</Text>
                        </Box>
                        <Box p={ 1 } flex={ 1 }>
                            <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Work </Text>
                            <Text fontSize={ 12 } color="#609546" fontWeight="bold">{ item.work }</Text>
                        </Box>
                        <Box p={ 1 } flex={ 1 }>
                            <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Contact </Text>
                            <Text fontSize={ 12 } color="#609546" fontWeight="bold">{ item.contact }</Text>
                        </Box>


                    </Box>

                ) }
                keyExtractor={ (item) => item._id }
            />
        </>
    )
}