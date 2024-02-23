import axios from 'axios';

const searchImages = async (term) => {
  const baseUrl = process.env.REACT_APP_UNSPLASH_BASE_URL;
  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const response = await axios.get(`${baseUrl}/search/photos`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    }, 
    params: {
      query: term,
    }
  })

  return response.data.results;
}

export default searchImages;