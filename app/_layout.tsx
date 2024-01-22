import { ApolloProvider } from "@apollo/client";
import { Stack } from "expo-router";
import client from "../graphql/client";

export default function MainStack() {
	return (
		<ApolloProvider client={client}>
			<Stack
				screenOptions={{
					headerShown: false,
					animation: "flip",
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="[id]" />
				<Stack.Screen name="evolutions" />
			</Stack>
		</ApolloProvider>
	);
}
