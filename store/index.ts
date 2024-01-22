import { create } from "zustand";
import { PokedexFilterStore } from "../types/stores";

const usePokedexFilterStore = create<PokedexFilterStore>(
	(set): PokedexFilterStore => ({
		search: "",
		pageNumber: 1,
		updateSearch: (search: string) =>
			set((state) => ({
				...state,
				search,
				pageNumber: 1,
			})),
		updatePageNumber: (pageNumber: number) =>
			set((state) => ({
				...state,
				pageNumber,
			})),
	}),
);

export default usePokedexFilterStore;
