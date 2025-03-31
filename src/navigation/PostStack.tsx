import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';
import PostDetailScreen from '../screens/Post/PostDetailScreen';
import PostScreen from '../screens/Post/PostScreen';

const Stack = createStackNavigator();

const PhotoStack = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPost(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Stack.Navigator initialRouteName="Posts">
            <Stack.Screen
                name="Posts"
                children={(props) =>
                    <PostScreen
                        {...props}
                        posts={post}
                        loading={loading}
                    />}
            />
            <Stack.Screen
                name="PostDetail"
                component={PostDetailScreen}
            />
        </Stack.Navigator>
    );
};

export default PhotoStack;