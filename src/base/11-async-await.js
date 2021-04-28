export const getImage = async () => {
  try {
    const API_KEY = "Au2dPNpfu08JAXnQygyU7oKe7cEx1uP5";
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
