import React from 'react'
import { FormControl, Stack, Input, TextArea, Heading } from 'native-base'



export default function ComplaintBoxScreen() {
    return (
        <>
            <Heading my={ 5 } color="#35a311">
                Write a complaint
            </Heading>
            <FormControl isRequired m={ 5 }>
                <Stack w="90%" mx={ 5 } space={ 4 }>
                    <FormControl.HelperText >
                        Don't worry , We'll keep this between us.
                    </FormControl.HelperText>
                    <FormControl.Label>Statement :</FormControl.Label>
                    <Input borderColor="#52ded8" p={ 2 } mb={ 3 } placeholder="Complaint_Statement" />
                    <FormControl.Label>About :</FormControl.Label>
                    <TextArea borderColor="#52ded8" h={ 20 } mt={ 2 } placeholder="Complaint" />
                </Stack>
            </FormControl>
        </>
    )
}
