import React, {
    memo,
    useCallback,
    useRef,
    useState,
} from 'react';

import { SCREENS } from '@navigation/config/screenName';
import NavigationService from '@navigation/NavigationService';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import analytics from '@react-native-firebase/analytics';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import { log } from '@src/utils/logger';
import PhotoScreen from '@src/navigation/PhotoStack';
import PostScreen from '@src/navigation/PostStack';

const Tabs = createBottomTabNavigator();

const AppNavigation = () => {

    const navigationRef = useRef<NavigationContainerRef<{}>>();
    const routeNameRef = useRef<string>();

    const [_loading, setLoading] = useState(true);

    const getInitData = useCallback(async () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);

    const ref = useCallback((refNavigation: NavigationContainerRef<{}>) => {
        navigationRef.current = refNavigation;
        NavigationService.setTopLevelNavigator(refNavigation);
    }, []);

    const onStateChange = useCallback(async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        log('Screen: ', currentRouteName);

        if (previousRouteName !== currentRouteName) {
            // await analytics().logScreenView({
            //     screen_name: currentRouteName,
            //     screen_class: currentRouteName,
            // });
        }

        routeNameRef.current = currentRouteName;
    }, []);

    const onReady = useCallback(() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        // if (isUserLoggedIn) {
        // set axios header token when open app from close state
        // setHeaderToken(userData?.token);
        // }
        getInitData();
    }, [getInitData]);

    return (
        <NavigationContainer
            ref={ref}
            onReady={onReady}
            onStateChange={onStateChange}
        >
            <Tabs.Navigator>
                <Tabs.Screen
                    name={SCREENS.POST_SCREEN}
                    component={PostScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Post',
                        tabBarIcon: () => null,
                    }}
                />
                <Tabs.Screen
                    name={SCREENS.PHOTO_SCREEN}
                    component={PhotoScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Photo',
                        tabBarIcon: () => null,
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

const NavigationWrapper = () => (
    <>
        <AppNavigation />
    </>
);

export default memo(NavigationWrapper);
