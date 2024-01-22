export type PokedexFilterStore = {
	search: string;
	pageNumber: number;
	updateSearch: (search: string) => void;
	updatePageNumber: (pageNumber: number) => void;
};
