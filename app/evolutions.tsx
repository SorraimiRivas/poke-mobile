import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Evolutions = () => {
	const router = useRouter();

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Evolutions</Text>
			<Button title="Go Back" onPress={() => router.back()} />
		</View>
	);
};

export default Evolutions;
