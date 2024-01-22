import { Stack } from "expo-router";


export default function MainStack() {
    return (
        <Stack screenOptions={{
            headerShown: false,
            animation: "flip"
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="[id]" />
            <Stack.Screen name="evolutions" />
        </Stack>
    )
}