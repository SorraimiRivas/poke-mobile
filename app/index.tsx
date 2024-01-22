import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.title}>Hello World</Text>
				<Text style={styles.subtitle}>This is the first page of your app.</Text>
			</View>
			<Link href={`/${20}`} asChild>
				<Pressable
					style={{
						paddingVertical: 5,
						paddingHorizontal: 10,
						backgroundColor: "blue",
						borderRadius: 15,
					}}
				>
					<Text style={{ color: "white", fontSize: 30, fontWeight: "800" }}>
						Press
					</Text>
				</Pressable>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});
