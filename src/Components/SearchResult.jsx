import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import detailsImage from '.././Assets/images/play.png';


export const MyListItems =  React.memo(({ onPressItem, id, title, artistName, imageSrc, navigation }) => {
    const onPress = () => {
        onPressItem(id);
    }

    const showTrackDetail = () => {
        navigation.navigate('Detail', {
            trackId: id,
        })
    }
    return (
            <View style={styles.wrapperItem}>
                <Image style={styles.trackImage} source={{uri: imageSrc}}/>
                <View style={styles.textView}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.artistName}>{artistName}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={showTrackDetail}>
                        <Image source={detailsImage} style={styles.imgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
    )
});

export const SearchResult = React.memo(({ tracks, navigation }) => {
    const renderItems = ({ item }) => (
        <MyListItems
            id={item.id}
            onPressItem={() => console.log('onPressItem')}
            title={item.title}
            artistName={item.artist.name}
            imageSrc={item.album.cover_small}
            navigation={navigation}
        />
    )
    const keyExtractor = (item, index) => item.id;
    return (
        <FlatList
            data={tracks}
            keyExtractor={keyExtractor}
            renderItem={renderItems}
        />
    )
})

const styles = StyleSheet.create({
    wrapperItem: {
        padding: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        color: 'grey',
        fontWeight: 'bold',
        maxWidth: 150,
        minWidth: 100
    },
    artistName: {
        color: 'rgb(103, 103, 103)',
        alignSelf: 'flex-start'
    },
    textView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 20,

    },
    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center'
    },
    trackImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    imgStyle: {
        width: 30,
        height: 30,
        marginRight: 5
    },
})
