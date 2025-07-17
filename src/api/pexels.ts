const getPexelsPhotos = async (pageNum: number, options: {}, perPageNum: number = 15) => {
    try {
      const pexelsApiKey = process.env.REACT_APP_PEXELS_API;
      const pexelsApiUrl = `https://api.pexels.com/v1/curated?page=${pageNum}per_page=${perPageNum}`;

      const response = await fetch(pexelsApiUrl, {
        method: "GET",
        headers: {
          Authorization: pexelsApiKey || "",
        },
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }
	  return []
    } catch (error) {
      console.error("Error fetching data from Pexels API:", error);
    }
  };

  export default getPexelsPhotos;