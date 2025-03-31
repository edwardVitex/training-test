import React, { memo } from 'react';
import { SCREENS } from '@navigation/config/screenName';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenOptionsDefault } from '@src/navigation/config/screenOptionsDefault';
import { RootStackParamList } from '@src/navigation/NavigationRouteProps';
import PostScreen from '@src/screens/post/PostScreen';
import PostDetailScreen from '@src/screens/post/PostDetailScreen';
import useThemeColors from '@src/themes/useThemeColors';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

const PostStack = () => {
    const { themeColors } = useThemeColors();

    return (
        <StackNavigator.Navigator
            screenOptions={{
                ...screenOptionsDefault,
                gestureEnabled: false,
                statusBarStyle: 'light',
                headerShown: true, // Sử dụng header mặc định
                animation: 'slide_from_right',
                contentStyle: { backgroundColor: themeColors.color_app_background }
            }}
        >
            <StackNavigator.Screen
                name={SCREENS.POST_SCREEN}
                component={PostScreen}
            />
            <StackNavigator.Screen
                name={SCREENS.POST_DETAIL_SCREEN}
                component={PostDetailScreen}
            />
        </StackNavigator.Navigator>
    );
};

export default memo(PostStack);
