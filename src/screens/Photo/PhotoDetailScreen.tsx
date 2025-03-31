import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PhotoDetailScreen = ({ route }) => {
    const { photo } = route.params; // Get photo data from navigation params

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: photo.thumbnailUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{photo.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default PhotoDetailScreen;
