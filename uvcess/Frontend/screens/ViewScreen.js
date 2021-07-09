import React, { useEffect } from 'react'
import { View, Text, Button, Dimensions, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { viewAction } from '../Actions'
import PDFReader from "rn-pdf-reader-js"
import { Spinner } from 'native-base'
import AlertComp from '../Components/AlertComp'

export default function ViewScreen({ route }) {
    const { id } = route.params

    const dispatch = useDispatch()

    const view = useSelector(state => state.view)
    const { loading, error, viewInfo } = view

    function imageSrc(item) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(item.doc.data.data));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    useEffect(() => {

        dispatch(viewAction(id))

    }, [])


    return (
        <View style={ { display: "flex", alignItems: "center", height: "95%" } } >

            { loading ? <Spinner color="blue" marginBottom="10%"></Spinner> : error ? <AlertComp error={ error } /> : viewInfo &&
                <PDFReader
                    withScroll={ true }
                    webviewStyle={true}
                    style={ { flex: 1, width: Dimensions.get("window").width, height: 500, marginBottom: 40 } }
                    source={ {
                        base64: `data:${viewInfo.doc.contentType};base64,${imageSrc(viewInfo)}`,

                    } }
                    onError={ error ? true : false }
                    onLoad={ loading ? true : false }
                /> }
        </View>
    )
}
