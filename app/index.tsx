import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MAX_POKEMON_ID, PAGE_SIZE } from "../lib/constants";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "../graphql/queries";
import usePokedexFilterStore from "../store";
import SmallPokemonCard from "@/components/pokemon/SmallPokemonCard";
import { styles } from "./styles/index.styles";
import Header from "@/components/Header";
import colors from "@/lib/colors";
import NetworkError from "./network-error";
import useNetwork from "@/hooks/useNetwork";
import EmptyState from "@/components/EmptyState";
import IndexSkeleton from "@/components/skeletons/index.skeleton";

export default function Page() {
	const { isConnected, isInternetReachable } = useNetwork();

	const store = usePokedexFilterStore((state) => state);

	const { data, loading, error, fetchMore } = useQuery(GET_POKEMON_LIST, {
		variables: {
			maxPokemonId: MAX_POKEMON_ID,
			offset: (store.pageNumber - 1) * PAGE_SIZE,
			search: `%${store.search}%`,
		},
	});

	const renderItem = ({ item }) => {
		return <SmallPokemonCard {...item} />;
	};

	if (!isConnected || !isInternetReachable) {
		return <NetworkError />;
	}

	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<Header />
				<View style={styles.searchbarContainer}>
					<TextInput
						value={store.search}
						onChangeText={store.updateSearch}
						style={styles.searchbar}
						placeholder="Search Pokemon"
						autoCapitalize="none"
						autoCorrect={false}
						autoComplete="off"
					/>
					<MaterialIcons
						name="search"
						size={20}
						color={colors.gray[700]}
						style={styles.searchIcon}
					/>
				</View>
			</View>
			{loading ? (
				<IndexSkeleton n={15} />
			) : (
				<View style={styles.listContainer}>
					<FlatList
						data={data?.pokemon}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
						ListEmptyComponent={EmptyState}
						numColumns={3}
						contentContainerStyle={styles.contentContainerStyle}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			)}
		</View>
	);
}
