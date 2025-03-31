import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native';

const PostItem = ({ item, navigation }) => (
    <TouchableOpacity
        style={styles.postItem}
        onPress={() => navigation.navigate('PostDetail', { post: item })}
        activeOpacity={0.7}
    >
        <View style={styles.contentContainer}>
            <Text
                style={styles.title}
                numberOfLines={1}
            >
                {item.title}
            </Text>
            <Text
                style={styles.preview}
                numberOfLines={2}
            >
                {item.body}
            </Text>
            <View style={styles.metaContainer}>
                <Text style={styles.meta}>Post #{item.id}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

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