import React, { memo, useRef } from 'react';
import { SCREENS } from '@navigation/config/screenName';
import NavigationService from '@navigation/NavigationService';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import BottomTab from '@src/navigation/bottomTab/BottomTabNavigation'; // Import BottomTab
import { RootStackParamList } from '@src/navigation/NavigationRouteProps';
import useThemeColors from '@src/themes/useThemeColors';

const StackNavigator = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
    const { themeColors } = useThemeColors();

    const navigationRef = useRef<NavigationContainerRef<{}>>(null);
    const routeNameRef = useRef<string>();

    const ref = (refNavigation: NavigationContainerRef<{}>) => {
        navigationRef.current = refNavigation;
        NavigationService.setTopLevelNavigator(refNavigation);
    };

    const onStateChange = () => {
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        routeNameRef.current = currentRouteName; // Cập nhật tên route hiện tại
    };

    return (
        <NavigationContainer
            ref={ref}
            onStateChange={onStateChange}
        >
            <StackNavigator.Navigator
                detachInactiveScreens={false}
                screenOptions={{
                    ...TransitionPresets.SlideFromRightIOS,
                    headerShown: false,
                    gestureEnabled: true,
                    cardStyle: {
                        backgroundColor: themeColors.color_app_background,
                    },
                }}
            >
                <StackNavigator.Screen
                    name={SCREENS.BOTTOM_TAB_SCREEN}
                    component={BottomTab} // Hiển thị BottomTab
                    options={{
                        ...TransitionPresets.ModalFadeTransition,
                    }}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
};

const NavigationWrapper = () => (
    <>
        <AppNavigation />
    </>
);

export default memo(NavigationWrapper);
