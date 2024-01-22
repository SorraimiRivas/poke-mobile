import { Image } from "expo-image";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const IndexSkeleton = ({ n }: { n: number }) => {
	return (
		<View style={styles.mainContainer}>
			{[...Array(n)].map((_, index) => (
				<View key={index} style={styles.cardContainer}>
					<View style={styles.top}>
						<Image
							style={styles.image}
							source={require("../../assets/svgs/ball.svg")}
							contentFit="contain"
						/>
						<View style={styles.id} />
					</View>
					<View style={styles.bottom}>
						<View style={styles.name} />
					</View>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: "row",
		display: "flex",
		gap: 4,
		overflow: "hidden",
		flexWrap: "wrap",
		flex: 1,
		justifyContent: "center",
	},
	cardContainer: {
		height: HEIGHT * 0.16,
		width: WIDTH * 0.3,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#E0E0E0",
	},
	top: {
		position: "relative",
		height: "80%",
		width: "80%",
		alignItems: "center",
		justifyContent: "center",
	},
	bottom: {
		height: "20%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		height: 80,
		width: 80,
		top: "20%",
	},
	name: {
		height: 20,
		width: "80%",
		borderRadius: 5,
		backgroundColor: "#BDBDBD",
	},
	id: {
		height: 10,
		width: 20,
		borderRadius: 10,
		backgroundColor: "#BDBDBD",
		position: "absolute",
		top: 4,
		right: -2,
	},
});

export default IndexSkeleton;
