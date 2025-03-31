import React from 'react';
import {
    View, Text, Image, StyleSheet, ScrollView, Dimensions, SafeAreaView
} from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width * 0.9;

const PhotoDetailScreen = ({ route }) => {
    const { post } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.card}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{post.title}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.body}>{post.body}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    card: {
        width: width * 0.9,
        backgroundColor: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    image: {
        width: imageWidth,
        height: imageWidth * 0.75,
    },
    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 12,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
    },
});

export default PhotoDetailScreen;