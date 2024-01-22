import { View, Text, Button } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useRouter } from "expo-router";

const Details = () => {
	const router = useRouter();

	const handleNavigation = () => {
		router.push("/evolutions");
	};

	return (
		<View
			style={{
				paddingTop: Constants.statusBarheight,
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text>Details</Text>
			<Button title="Press" onPress={handleNavigation} />
			<Button title="Back" onPress={() => router.back()} />
		</View>
	);
};

export default Details;
