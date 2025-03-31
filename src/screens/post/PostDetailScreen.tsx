import React, { useEffect, useState } from 'react';
import {
    View, StyleSheet, Text
} from 'react-native';
import axios from 'axios';
import useDimens, { DimensType } from '@src/hooks/useDimens';
import useThemeColors from '@src/themes/useThemeColors';
import LoadingIndicator from '@src/components/LoadingIndicator';

const PostDetailScreen = ({ route }) => {
    const { postId } = route.params;
    const Dimens = useDimens();
    const styles = stylesF(Dimens);
    const { themeColors } = useThemeColors();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostDetail = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post detail:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPostDetail();
    }, [postId]);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <View style={[styles.container, { backgroundColor: themeColors.color_app_background }]}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
        </View>
    );
};

const stylesF = (Dimens: DimensType) => StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimens.H_16,
    },
    title: {
        fontSize: Dimens.H_24,
        fontWeight: 'bold',
        marginBottom: Dimens.H_8,
    },
    body: {
        fontSize: Dimens.H_16,
        color: '#333',
    },
});

export default PostDetailScreen;
