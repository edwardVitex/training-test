import React, {
    memo,
    useCallback,
    useRef,
    useState,
} from 'react';

import { SCREENS } from '@navigation/config/screenName';
import NavigationService from '@navigation/NavigationService';
// import analytics from '@react-native-firebase/analytics';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList } from '@src/navigation/NavigationRouteProps';
import SplashScreen from '@src/screens/splash/SplashScreen';
import useThemeColors from '@src/themes/useThemeColors';
import { log } from '@src/utils/logger';

const StackNavigator = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
    const { themeColors } = useThemeColors();

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

    const checkAppScreen = useCallback(() => (
        <StackNavigator.Screen
            options={{
                ...TransitionPresets.ModalFadeTransition,
                gestureEnabled: false,
            }}
            name={SCREENS.SPLASH_SCREEN}
            component={SplashScreen}
        />
    ), []);

    return (
        <NavigationContainer
            ref={ref}
            onReady={onReady}
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
                {checkAppScreen()}
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
