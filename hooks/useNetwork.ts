import { useState, useEffect } from "react";
import Netinfo from "@react-native-community/netinfo";

const useNetwork = () => {
	const [isConnected, setIsConnected] = useState<boolean>();
	const [isInternetReachable, setIsInternetReachable] = useState<boolean>();

	useEffect(() => {
		const unsubscribe = Netinfo.addEventListener((state) => {
			setIsConnected(state.isConnected);
			setIsInternetReachable(state.isInternetReachable);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return { isConnected, isInternetReachable };
};

export default useNetwork;
