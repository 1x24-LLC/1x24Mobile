import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
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
});
