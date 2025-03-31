import React from 'react';
import {
    View, ActivityIndicator, StyleSheet
} from 'react-native';
import useThemeColors from '@src/themes/useThemeColors';

const LoadingIndicator = () => {
    const { themeColors } = useThemeColors();

    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color={themeColors.color_primary}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingIndicator;
