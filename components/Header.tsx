import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Header = () => {
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Image
					source={require("../assets/svgs/small_pokeball.svg")}
					style={{ height: 30, width: 30 }}
					contentFit="contain"
				/>
				<View>
					<Text style={styles.title}>Pokédex</Text>
				</View>
			</View>
			<View style={styles.rightContainer}>
				<Image
					source={require("../assets/svgs/sort.svg")}
					style={{ height: 30, width: 30 }}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 16,
	},
	leftContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	rightContainer: {
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "700",
	},
});

export default Header;
