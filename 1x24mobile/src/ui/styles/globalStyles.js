import { StyleSheet, Appearance } from "react-native";

var pallet = {
  main_accent: {
    DEFAULT: "#de4018",
    100: "#2c0d05",
    200: "#58190a",
    300: "#84260f",
    400: "#b03314",
    500: "#de4018",
    600: "#ea6240",
    700: "#ef8970",
    800: "#f4b1a0",
    900: "#fad8cf",
  },
  secondary_accent: {
    DEFAULT: "#eb8e25",
    100: "#311d05",
    200: "#633909",
    300: "#94560e",
    400: "#c67212",
    500: "#eb8e25",
    600: "#efa450",
    700: "#f3bb7b",
    800: "#f7d2a7",
    900: "#fbe8d3",
  },
  main_dark_accent: {
    DEFAULT: "#424b54",
    100: "#0d0f11",
    200: "#1a1e21",
    300: "#272c32",
    400: "#343b42",
    500: "#424b54",
    600: "#616e7b",
    700: "#85929f",
    800: "#aeb7bf",
    900: "#d6dbdf",
  },
  secondary_dark_accent: {
    DEFAULT: "#4b4237",
    100: "#0f0d0b",
    200: "#1d1a16",
    300: "#2c2721",
    400: "#3b342b",
    500: "#4b4237",
    600: "#756857",
    700: "#9d8e7b",
    800: "#beb4a7",
    900: "#ded9d3",
  },
  main_light_accent: {
    DEFAULT: "#d2d7df",
    100: "#242a33",
    200: "#485365",
    300: "#6d7d97",
    400: "#a0aabb",
    500: "#d2d7df",
    600: "#dbdfe6",
    700: "#e4e7ec",
    800: "#edeff2",
    900: "#f6f7f9",
  },
  secondary_light_accent: {
    DEFAULT: "#78c0e0",
    100: "#0d2b38",
    200: "#19566f",
    300: "#2680a7",
    400: "#3ea6d3",
    500: "#78c0e0",
    600: "#91cde6",
    700: "#add9ec",
    800: "#c8e6f3",
    900: "#e4f2f9",
  },
  light_background: {
    DEFAULT: "#ffffff",
    100: "#333333",
    200: "#666666",
    300: "#999999",
    400: "#cccccc",
    500: "#ffffff",
    600: "#ffffff",
    700: "#ffffff",
    800: "#ffffff",
    900: "#ffffff",
  },
  dark_background: {
    DEFAULT: "#1a232b",
    100: "#050709",
    200: "#0b0f12",
    300: "#10161b",
    400: "#151d24",
    500: "#1a232b",
    600: "#3c5163",
    700: "#5d7d9a",
    800: "#91a9bd",
    900: "#c8d4de",
  },
};

var isDarkTheme = Appearance.getColorScheme() === "dark";

var theme = {
    MainAccent : isDarkTheme ? pallet.main_dark_accent.DEFAULT : pallet.main_accent.DEFAULT,
    SecondaryAccent : isDarkTheme ? pallet.secondary_dark_accent.DEFAULT : pallet.secondary_accent.DEFAULT,
    MainBackground : isDarkTheme ? pallet.dark_background.DEFAULT : pallet.light_background.DEFAULT,
    SecondaryBackground : isDarkTheme ? pallet.dark_background.DEFAULT : pallet.light_background.DEFAULT,
    MainLightAccent : isDarkTheme ? pallet.main_accent.DEFAULT : pallet.main_light_accent.DEFAULT,
    SecondaryLightAccent : isDarkTheme ? pallet.secondary_accent.DEFAULT : pallet.secondary_light_accent.DEFAULT,
    MainDarkAccent : isDarkTheme ? pallet.main_accent.DEFAULT : pallet.main_dark_accent.DEFAULT,
    SecondaryDarkAccent : isDarkTheme ? pallet.secondary_accent.DEFAULT : pallet.secondary_dark_accent.DEFAULT,
}



export const GlobalStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: pallet.dark_background.DEFAULT,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
    buttonTitle: {
        fontSize: 20,
    },
    AppHeader: {
        iconContainer: {
            flexDirection: "row", // to align IconButton and Badge in one line
            justifyContent: "center", // to center them on the main axis
            alignItems: "center", // to center them on cross-axis
            //padding: 10, // to give some space around
        },
        badge: {
            backgroundColor: pallet.main_accent.DEFAULT, 
            color: pallet.main_light_accent.DEFAULT, 
            marginLeft: -25, // to give some space between the IconButton and Badge
            top: -25, // to move the Badge a bit higher
            //marginTop: 50, // to give some space between the IconButton and Badge
        },
        logoContainer: {
            width: 66,
            height: 32,
        },
    }
});
