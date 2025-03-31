import React, { useEffect, useState } from 'react';
import {
    View, StyleSheet, Text, Image
} from 'react-native';
import axios from 'axios'; // Import axios
import useDimens, { DimensType } from '@src/hooks/useDimens';
import useThemeColors from '@src/themes/useThemeColors';

const PhotoDetailScreen = ({ route }) => {
    const { photoId } = route.params;
    const Dimens = useDimens();
    const styles = stylesF(Dimens);
    const { themeColors } = useThemeColors();
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const fetchPhotoDetail = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`); // Sử dụng axios để gọi API
                setPhoto(response.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error('Error fetching photo detail:', error);
            }
        };

        fetchPhotoDetail();
    }, [photoId]);

    if (!photo) {
        return <Text>Loading...</Text>;
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
    },
});

export default PhotoDetailScreen;
