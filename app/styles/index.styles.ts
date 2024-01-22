import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "@/lib/colors";

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.background,
		paddingBottom: 20,
	},
	container: {
		marginTop: Constants.statusBarHeight,
		paddingHorizontal: 15,
		alignItems: "center",
		gap: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 64,
	},
	subtitle: {
		color: "#38434D",
		fontSize: 36,
	},
	searchbarContainer: {
		width: "100%",
		position: "relative",
		marginBottom: 20,
	},
	searchbar: {
		borderColor: colors.gray[400],
		paddingVertical: 6,
		borderRadius: 10,
		paddingLeft: 30,
		borderWidth: 1,
		width: "100%",
		fontSize: 16,
		backgroundColor: colors.white,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	searchIcon: {
		position: "absolute",
		top: 7,
		left: 8,
	},

	listContainer: {
		flex: 1,
		width: "100%",
		alignItems: "center",
	},
	contentContainerStyle: {
		gap: 14,
	},
	loading: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		fontSize: 20,
		fontWeight: "800",
	},
	emptyText: {
		fontSize: 20,
		fontWeight: "800",
	},
});
