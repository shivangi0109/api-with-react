import axios from 'axios';

const searchImages = async () => {
  const baseUrl = process.env.REACT_APP_UNSPLASH_BASE_URL;
  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const response = await axios.get(`${baseUrl}/search/photos`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    }, 
    params: {
      query: 'cars',
    }
  })

  console.log(response);

  return response;
}

export default searchImages;