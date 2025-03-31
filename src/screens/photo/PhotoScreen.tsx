import React, { useEffect, useState } from 'react';
import {
    View, FlatList, TouchableOpacity, StyleSheet, Text, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import useDimens, { DimensType } from '@src/hooks/useDimens';
import useThemeColors from '@src/themes/useThemeColors';
import { SCREENS } from '@src/navigation/config/screenName';
import LoadingIndicator from '@src/components/LoadingIndicator';

const PhotoScreen = () => {
    const Dimens = useDimens();
    const styles = stylesF(Dimens);
    const { themeColors } = useThemeColors();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            } finally {
                setLoading(false);
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
            {loading ? (
                <LoadingIndicator />
            ) : (
                <FlatList
                    data={photos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
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
