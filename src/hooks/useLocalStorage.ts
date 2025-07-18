import { useEffect, useState } from "react";

interface Results {
	data: unknown,
	id: string | number
}

type UseLocalStorageReturn = [
	results: Results[],
	setItem: (value: Results) => void,
	removeItem: (id: string | number) => void
]

const useLocalStorage = (key: string): UseLocalStorageReturn => {

	const [results, setResults] = useState([]);

	useEffect(() => {
		const data = getItem()
		setResults(data);
	}, [])

	const setItem = (value: Results) => {
		try{
			const currentData: Results[] = getItem();
			window.localStorage.setItem(key, JSON.stringify([...currentData, value]));
		} catch(error) {
			console.error("An error occurred saving an item to the local storage: ", error);
		}
	}

	const getItem = () => {
		try {
			const items = window.localStorage.getItem(key);
			return items ? JSON.parse(items) : [];
		} catch(error) {
			console.error("An error occurred getting an item from the local storage: ", error);
			return [];
		}
	}

	const removeItem = (id: string | number) => {
		try{
			const data = getItem();
			const filteredData = data?.filter((item: Results) => item.id !== id);
			window.localStorage.setItem(key, JSON.stringify(filteredData));
		} catch(error) {
			console.error("An error occurred deleting an item from the local storage: ", error);
		}
	}

	// const removeItems = () => {
	// 	try {
	// 		window.localStorage.removeItem(key);
	// 	} catch(error) {
	// 	console.error("An error occurred deleting items from the local storage: ", error);
	// }}

	return [results, setItem, removeItem]

}

export default useLocalStorage