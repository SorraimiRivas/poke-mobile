import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Dimensions,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import {
	getPaddedPokemonId,
	getPokemonImage,
	resolvePokemonName,
} from "@/lib/utils";
import colors from "@/lib/colors";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SmallPokemonCard = ({ name, id, types }) => {
	const router = useRouter();

	const pokemonId = getPaddedPokemonId(id);
	const pokemonName = resolvePokemonName(name);
	const pokemonImage = getPokemonImage(id);
	const typeColor = types[0].type.name;

	const handleOnPress = () => {
		router.push(`/${id}`);
	};

	return (
		<Pressable
			style={[styles.container, { borderColor: colors[typeColor] }]}
			onPress={handleOnPress}
		>
			<View style={styles.imageContainer}>
				<Image source={{ uri: pokemonImage }} style={styles.image} />
				<Text style={[styles.id, { color: colors[typeColor] }]}>
					#{pokemonId}
				</Text>
			</View>
			<View
				style={[styles.infoContainter, { backgroundColor: colors[typeColor] }]}
			>
				<Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
					{pokemonName}
				</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		height: HEIGHT * 0.16,
		width: WIDTH * 0.3,
		borderRadius: 10,
		overflow: "hidden",
		borderWidth: 1,
		backgroundColor: colors.white,
		marginHorizontal: 4,
	},
	imageContainer: {
		position: "relative",
		height: "80%",
		alignItems: "center",
		justifyContent: "center",
	},
	id: {
		position: "absolute",
		top: 4,
		right: 4,
		fontSize: 12,
		fontWeight: "500",
	},
	image: {
		height: "85%",
		width: "85%",
		resizeMode: "contain",
		top: 10,
	},
	infoContainter: {
		height: "20%",
		alignItems: "center",
		justifyContent: "center",
	},
	name: {
		fontWeight: "bold",
		fontSize: 14,
		textTransform: "capitalize",
		color: "white",
	},
});

export default SmallPokemonCard;
