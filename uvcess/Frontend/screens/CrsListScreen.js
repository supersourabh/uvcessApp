import React, { useEffect } from 'react'
import { FlatList, Box, Text, Button, Spinner } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { crsAction } from '../Actions'
import AlertComp from '../Components/AlertComp'

export default function CrsListScreen() {

    const dispatch = useDispatch()


    const crs = useSelector(state => state.crs)
    const { loading, error, crsList, success } = crs

    useEffect(() => {
        if (!success) {

            dispatch(crsAction())

        }

    }, [])




    return (
        <>
            {
                loading ? <Spinner color="blue.300" /> :
                    error ? <AlertComp error={ error } /> : null

            }

            <FlatList
                data={ crsList }
                renderItem={ ({ item }) => (
                    <Box w="330" flexDirection="row" mx={ 10 } p={ 2 } rounded="md" my={ 2 } bg="#add4d0">

                        <Box p={ 1 } flex={ 1 }>
                            <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Name of CR</Text>
                            <Text color="#609546" fontSize={ 12 } fontWeight="bold" overflow="hidden">{ item.name }</Text>
                        </Box>
                        <Box p={ 1 } flex={ 1 }>
                            <Text fontSize={ 12 } color="#b35e5e" fontWeight={ 700 }>Branch & Sem </Text>
                            <Text fontSize={ 12 } color="#609546" fontWeight="bold">{ item.branch },{ item.sem }</Text>
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
