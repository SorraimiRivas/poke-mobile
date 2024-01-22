import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const EmptyState: React.FC = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/svgs/404.png")}
				style={styles.image}
				contentFit="contain"
			/>
			<Text style={styles.text}>Psy~?...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 30,
	},
	text: {
		marginTop: 8,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	image: {
		width: 300,
		height: 300,
	},
});

export default EmptyState;
