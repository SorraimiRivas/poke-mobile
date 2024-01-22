import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "@/lib/colors";
import { Image } from "expo-image";

const NetworkError = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/svgs/snorlax.png")}
				style={styles.image}
				contentFit="contain"
			/>
			<Text style={styles.text}>
				Poké-problem detected! Your device's internet connection is channeling
				its inner Snorlax.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		gap: 30,
	},
	text: {
		marginTop: 10,
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	image: {
		width: 300,
		height: 300,
	},
});

export default NetworkError;
