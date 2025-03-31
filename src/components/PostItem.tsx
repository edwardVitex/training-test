import React from 'react';
import {
    View, Text, Image, StyleSheet, TouchableOpacity
} from 'react-native';

const PostItem = ({ item, navigation }) => {
    // Create a truncated body preview if body is available
    const bodyPreview = item.body
        ? `${item.body.substring(0, 60)}${item.body.length > 60 ? '...' : ''}`
        : '';

    return (
        <TouchableOpacity
            style={styles.postItem}
            onPress={() => navigation.navigate('PostDetail', { post: item })}
            activeOpacity={0.7}
        >
            {item.thumbnailUrl && (
                <Image
                    source={{ uri: item.thumbnailUrl }}
                    style={styles.thumbnail}
                />
            )}
            <View style={styles.contentContainer}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                {bodyPreview ? (
                    <Text style={styles.preview} numberOfLines={2}>{bodyPreview}</Text>
                ) : null}
                <View style={styles.metaContainer}>
                    {item.userId && (
                        <Text style={styles.meta}>User ID: {item.userId}</Text>
                    )}
                    <Text style={styles.meta}>Post #{item.id}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    postItem: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    thumbnail: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
    },
    preview: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    metaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    meta: {
        fontSize: 12,
        color: '#888',
    }
});

export default PostItem;