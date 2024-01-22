import { StyleSheet, Pressable, ActivityIndicator, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
	onPress: () => void;
	loading: boolean;
};

const LoadLess = ({ onPress, loading }: Props) => {
	if (loading) {
		return (
			<View>
				<ActivityIndicator size="large" color="black" />
			</View>
		);
	}

	return (
		<Pressable style={styles.container} onPress={onPress}>
			{({ pressed }) => (
				<Feather
					name="arrow-up-circle"
					size={pressed ? 50 : 40}
					color="black"
				/>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
	},
});

export default LoadLess;
