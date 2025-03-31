import React from 'react';
import {
    View, Text, FlatList, StyleSheet, ActivityIndicator
} from 'react-native';
import PostItem from '@src/components/PostItem';

const PostScreen = ({ navigation, posts, loading }) => {

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                />
                <Text>Loading Posts...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <PostItem
                        item={item}
                        navigation={navigation}
                    />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 16,
    },
});

export default PostScreen;