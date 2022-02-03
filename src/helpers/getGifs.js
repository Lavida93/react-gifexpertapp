export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=27jJ9FJ0EL5wFyw6AkHU0Qyg5VvsnB07`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            src: img.images?.downsized_medium.url
        }
    });
    return gifs;
};