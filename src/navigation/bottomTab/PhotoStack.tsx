import React, { memo } from 'react';
import { SCREENS } from '@navigation/config/screenName';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenOptionsDefault } from '@src/navigation/config/screenOptionsDefault';
import { RootStackParamList } from '@src/navigation/NavigationRouteProps';
import PhotoScreen from '@src/screens/photo/PhotoScreen';
import PhotoDetailScreen from '@src/screens/photo/PhotoDetailScreen';
import useThemeColors from '@src/themes/useThemeColors';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

const PhotoStack = () => {
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
                name={SCREENS.PHOTO_SCREEN}
                component={PhotoScreen}
            />
            <StackNavigator.Screen
                name={SCREENS.PHOTO_DETAIL_SCREEN}
                component={PhotoDetailScreen}
            />
        </StackNavigator.Navigator>
    );
};

export default memo(PhotoStack);
