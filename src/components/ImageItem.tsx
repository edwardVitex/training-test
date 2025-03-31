import React from 'react';
import {
    Text, Image, StyleSheet, TouchableOpacity, View, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const ImageItem = ({ item, navigation }) => (
    <TouchableOpacity
        style={styles.photoItem}
        onPress={() => navigation.navigate('PhotoDetail', { photo: item })}
        activeOpacity={0.7}
    >
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: item.thumbnailUrl }}
                style={styles.thumbnail}
                resizeMode="cover"
            />
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.id}>Photo #{item.id}</Text>
            {item.albumId && (
                <Text style={styles.albumId}>Album #{item.albumId}</Text>
            )}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    photoItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    imageContainer: {
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    thumbnail: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        flexShrink: 1,
        marginBottom: 6,
    },
    id: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    albumId: {
        fontSize: 12,
        color: '#888',
    }
});

export default ImageItem;