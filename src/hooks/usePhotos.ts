import { useEffect, useState } from "react"
import { Photo } from "../../types/photo";
import getPexelsPhotos from "../api/pexels";

const usePhotos = (pageNum: number = 1) => {

	const [results, setResults] = useState<Photo[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState({});
	const [hasNextPage, setHasNextPage] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setIsError(false);
		setError({});

		const controller = new AbortController();
		const {signal} = controller;

		getPexelsPhotos(pageNum, {signal})
			.then(data => {
				setResults((prevItems) => [...prevItems, ...data?.photos])
				setHasNextPage(Boolean(data?.length));
				setIsLoading(false);
			})
			.catch(error => {
				setIsLoading(false);
				if(signal.aborted) {
					return
				}
				setIsError(true)
				setError({message: error.message})
			})

		return () => controller.abort();
	}, [pageNum])

	return {isLoading, isError, error, results, hasNextPage}

}

export default usePhotos;