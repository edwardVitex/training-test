import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoDetailScreen from '../screens/Photo/PhotoDetailScreen';
import PhotoScreen from '../screens/Photo/PhotoScreen';

const Stack = createStackNavigator();

const PhotoStack = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                setPhotos(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Stack.Navigator initialRouteName="Photo">
            <Stack.Screen
                name="Photo"
                children={(props) =>
                    <PhotoScreen
                        {...props}
                        photos={photos}
                        loading={loading}
                    />}
            />
            <Stack.Screen
                name="PhotoDetail"
                component={PhotoDetailScreen}
            />
        </Stack.Navigator>
    );
};

export default PhotoStack;