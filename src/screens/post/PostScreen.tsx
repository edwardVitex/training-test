import React, { useEffect, useState } from 'react';
import {
    View, FlatList, TouchableOpacity, StyleSheet, Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios
import useDimens, { DimensType } from '@src/hooks/useDimens';
import useThemeColors from '@src/themes/useThemeColors';
import { SCREENS } from '@src/navigation/config/screenName';

const PostScreen = () => {
    const Dimens = useDimens();
    const styles = stylesF(Dimens);
    const { themeColors } = useThemeColors();
    const [posts, setPosts] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Sử dụng axios để gọi API
                setPosts(response.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.postItem}
            onPress={() => navigation.navigate(SCREENS.POST_DETAIL_SCREEN, { postId: item.id })}
        >
            <Text
                style={styles.title}
                numberOfLines={1}
            >
                {item.title}
            </Text>
            <Text
                style={styles.body}
                numberOfLines={2}
            >
                {item.body}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { backgroundColor: themeColors.color_app_background }]}>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const stylesF = (Dimens: DimensType) => StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimens.H_16,
    },
    postItem: {
        marginBottom: Dimens.H_16,
        padding: Dimens.H_16,
        backgroundColor: '#f9f9f9',
        borderRadius: Dimens.H_8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: Dimens.H_4,
        elevation: 2,
    },
    title: {
        fontSize: Dimens.H_16,
        fontWeight: 'bold',
    },
    body: {
        fontSize: Dimens.H_14,
        color: '#555',
    },
});

export default PostScreen;
