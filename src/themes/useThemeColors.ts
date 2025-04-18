import { useMemo } from 'react';

import { useColorScheme } from 'react-native';

const Colors = {
    light: {
        color_primary: '#B5B268',
        color_secondary: '#B5B268',
        color_app_background: '#F8F8F8',
        color_dialog_background: '#FFFFFF',
        color_loading_indicator: '#B5B268',
        color_dash: '#E1E1E1',
        color_button_default: '#322F28',
        color_button_disable_default: '#979797',
        color_button_dark: '#322F28',
        color_button_text: '#FFFFFF',
        color_text: '#000000',
        color_text_2: '#413E38',
        color_tab_inactive: '#413E38',
        color_divider: '#00000010',
        color_input_border_error: '#D94B2C',
        color_error: '#D94B2C',
        color_input_error_background: '#F2E8E8',
        color_text_profile_menu: '#000000',
        color_input_background: '#FFFFFF',
        color_input_place_holder: '#949494',
        color_loading_placeholder_background: '#000000',
        color_loading_placeholder_foreground: '#eee',
        color_common_description_text: '#B4B4B4',
        color_card_background: '#FFFFFF',
        color_common_subtext: '#949494',
        color_dot: '#413E38',
        color_dot_inactive: '#D1D1D1',
        color_card_divider: '#00000010',
        color_progress: '#413E38',
        color_common_line: '#D1D1D1',
        color_product_option: '#717171',
        color_fix_tab_selected: '#EE7C14',

        //template app
        workspace_home_button_text: '#FFFFFF',
        workspace_home_button_background: '#B5B268',
        workspace_home_func_background: '#FFFFFF',
        workspace_home_func_title: '#000000',
        workspace_home_func_desc: '#B4B4B4',

        //group app
        group_color: '#B5B268'
    },
    dark: {
        color_primary: '#B5B268',
        color_secondary: '#B5B268',
        color_app_background: '#404040',
        color_dialog_background: '#0E0E0E',
        color_loading_indicator: '#B5B268',
        color_dash: '#353535',
        color_button_default: '#979797',
        color_button_disable_default: '#434343',
        color_button_dark: '#323028',
        color_button_text: '#FFFFFF',
        color_text: '#FFFFFF',
        color_text_2: '#FFFFFF',
        color_tab_inactive: '#C4C4C4',
        color_divider: '#323232',
        color_input_border_error: '#D94B2C',
        color_error: '#D94B2C',
        color_input_error_background: '#D94B2C20',
        color_text_profile_menu: '#E6E6E6',
        color_input_background: '#141414',
        color_input_place_holder: '#717171',
        color_loading_placeholder_background: '#000000',
        color_loading_placeholder_foreground: '#eee',
        color_common_description_text: '#757575',
        color_card_background: '#313131',
        color_common_subtext: '#D7D7D7',
        color_dot: '#E6E6E6',
        color_dot_inactive: '#5E5E5E',
        color_card_divider: '#5E5E5E',
        color_progress: '#888888',
        color_common_line: '#D1D1D1',
        color_product_option: '#FFFFFF',
        color_fix_tab_selected: '#EE7C14',

        //template app
        workspace_home_button_text: '#B5B268',
        workspace_home_button_background: '#454545',
        workspace_home_func_background: '#454545',
        workspace_home_func_title: '#B4B4B4',
        workspace_home_func_desc: '#FFFFFF',

        //group app
        group_color: '#B5B268'
    },
};

const useThemeColors = () => {
    const colorScheme = useColorScheme() || 'light';
    const isDarkMode = colorScheme === 'dark';

    const appColors = useMemo(() => {
        let themeColors = Colors[colorScheme];

        return {
            themeColors,
            isDarkMode
        };
    }, [colorScheme, isDarkMode]);

    return appColors;
};

export default useThemeColors;
