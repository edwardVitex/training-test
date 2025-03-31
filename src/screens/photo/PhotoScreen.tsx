import React, { useEffect, useState } from 'react';
import {
    View, FlatList, TouchableOpacity, StyleSheet, Text, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios
import useDimens, { DimensType } from '@src/hooks/useDimens';
import useThemeColors from '@src/themes/useThemeColors';
import { SCREENS } from '@src/navigation/config/screenName';

const PhotoScreen = () => {
    const Dimens = useDimens();
    const styles = stylesF(Dimens);
    const { themeColors } = useThemeColors();
    const [photos, setPhotos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos'); // Sử dụng axios để gọi API
                setPhotos(response.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.photoItem}
            onPress={() => navigation.navigate(SCREENS.PHOTO_DETAIL_SCREEN, { photoId: item.id })}
        >
            <Image
                source={{ uri: item.thumbnailUrl }}
                style={styles.image}
            />
            <Text
                style={styles.title}
                numberOfLines={1}
            >
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { backgroundColor: themeColors.color_app_background }]}>
            <FlatList
                data={photos}
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
    photoItem: {
        marginBottom: Dimens.H_16,
        padding: Dimens.H_16,
        backgroundColor: '#f9f9f9',
        borderRadius: Dimens.H_8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: Dimens.H_4,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: Dimens.H_8,
    },
    title: {
        fontSize: Dimens.H_16,
        fontWeight: 'bold',
        marginTop: Dimens.H_8,
    },
});

export default PhotoScreen;
