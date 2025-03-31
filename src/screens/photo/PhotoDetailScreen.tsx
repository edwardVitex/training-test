import React, { useEffect, useState } from 'react';
import {
    View, StyleSheet, Text, Image
} from 'react-native';
import useDimens, { DimensType } from '@src/hooks/useDimens';
import useThemeColors from '@src/themes/useThemeColors';
import axios from 'axios';
import LoadingIndicator from '@src/components/LoadingIndicator';

const PhotoDetailScreen = ({ route }) => {
    const { photoId } = route.params;
    const Dimens = useDimens();
    const styles = stylesF(Dimens);
    const { themeColors } = useThemeColors();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotoDetail = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
                setPhoto(response.data);
            } catch (error) {
                console.error('Error fetching photo detail:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotoDetail();
    }, [photoId]);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (!photo) {
        return (
            <View style={[styles.container, { backgroundColor: themeColors.color_app_background }]}>
                <Text style={styles.title}>Photo not found</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: themeColors.color_app_background }]}>
            <Image
                source={{ uri: photo.url }}
                style={styles.image}
            />
            <Text style={styles.title}>{photo.title}</Text>
        </View>
    );
};

const stylesF = (Dimens: DimensType) => StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimens.H_16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: Dimens.H_8,
        marginBottom: Dimens.H_8,
    },
    title: {
        fontSize: Dimens.H_24,
        fontWeight: 'bold',
        marginBottom: Dimens.H_8,
        textAlign: 'center',
    },
});

export default PhotoDetailScreen;
