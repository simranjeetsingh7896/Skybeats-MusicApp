import React from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { findTrackById } from '../Api';

const useFetchDetail = (id) => {
    const [detail, setDetail] = React.useState(null);
    React.useEffect(() => {
        findTrackById(id).then(trackDetail => setDetail(trackDetail));
    }, [id])
    return detail;
}
export const Detail = React.memo((props) => {
    const trackId = props.navigation.getParam('trackId');
    const detail = useFetchDetail(trackId);
    console.log(detail);

    //if statement to check the json object
    if (detail) {
        return (
            <View style={styles.container}>
                <Button title="Back to Search" onPress={() => props.navigation.navigate('Home')} style={styles.goback}/>

                <View style={styles.description}>
                    <Image source ={{ uri: detail.artist.picture}} style={styles.imgSource}/>
                    <View style={styles.detail}>
                        <Text>{detail.title}</Text>
                        <Text>{detail.artist.name}</Text>
                    </View>
                </View>

                <View style={styles.trackDetail}>
                    <Image source={{uri: detail.album.cover_xl}} style={styles.trackImg}/>
                    <Text style={styles.releasedDate}>Album Released: {detail.album.release_date}</Text>
                    <figure>
                        <audio controls src={detail.preview}>Your browser does not support the audio element.</audio>
                    </figure>
                </View>
            </View>
        )
    }
    return null;
})

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignSelf: 'center'
    },
    description: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'grey'
    },
    goback: {
        padding: 40
    },
    detail: {
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
    },
    trackImg: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        borderRadius: 150,
    },
    imgSource: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    trackDetail: {
        padding: 5,
        alignItems: 'center'
    },
    releasedDate: {
        padding: 20,
        fontWeight: 'bold',
    }
});