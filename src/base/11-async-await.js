export const getImage = async () => {
  try {
    const API_KEY = "GIPHY API KEY HERE";
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const response = await fetch(URL);
    const {
      data: {
        images: {
          original: { url },
        },
      },
    } = await response.json();

    return url;
  } catch (error) {
    return "Ocurrio un error";
  }
};
//getImage();
