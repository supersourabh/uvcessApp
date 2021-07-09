import React from 'react'
import { Alert } from 'native-base';
export default function AlertComp(props) {
    const{error}=props;

    return (
        <Alert w="100%" status="error">
            <Alert.Icon />
            <Alert.Description>
                { error }
            </Alert.Description>
        </Alert>
    )
}
