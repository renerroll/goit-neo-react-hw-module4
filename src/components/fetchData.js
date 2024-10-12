import { useState } from "react";
import axios from "axios";

const API_ACCESS_KEY = atob(import.meta.env.VITE_UNSPLASH_ACCESS_KEY);

axios.defaults.baseURL = "https://api.unsplash.com/";

const useUnsplashApi = () => {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(-1);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async ({ query, page = 1, per_page = 20 }) => {
    setLoading(true);
    try {
      const { data } = await axios.get("search/photos", {
        params: {
          query,
          page,
          per_page,
          orientation: "landscape",
        },
        headers: {
          Authorization: `Client-ID ${API_ACCESS_KEY}`,
        },
      });

      const formattedImages = data.results.map((img) => ({
        id: img.id,
        alt_description: img.alt_description,
        urls: img.urls,
      }));

      setImages((prevImages) => [...prevImages, ...formattedImages]);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchPhotos,
    images,
    setImages,
    totalPages,
    loading,
  };
};

export default useUnsplashApi;
