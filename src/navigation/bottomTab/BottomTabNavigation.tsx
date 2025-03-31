import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '@src/navigation/config/screenName';

// Import các Stack navigator tương ứng (bạn cần tạo 2 stack này)
import PostStack from './PostStack';
import PhotoStack from './PhotoStack';

const BottomTabNavigator = createBottomTabNavigator();

const BottomTab = () => {
    const { t } = useTranslation();

    return (
        <BottomTabNavigator.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#f5f5f5',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <BottomTabNavigator.Screen
                name={SCREENS.POST_TAB_SCREEN}
                component={PostStack}
                options={{
                    title: t('Posts'),
                }}
            />
            <BottomTabNavigator.Screen
                name={SCREENS.PHOTO_TAB_SCREEN}
                component={PhotoStack}
                options={{
                    title: t('Photos'),
                }}
            />
        </BottomTabNavigator.Navigator>
    );
};

export default memo(BottomTab);