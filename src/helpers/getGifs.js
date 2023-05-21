/* helpers/getGifs.js */

export const getGifs = async( category ) => { // al no ser necesario que este dentro del componente se saca
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Ul9r8xMMeqZMif50dfp6bpgtKLJsJ2x6&q=${ category }&limit=10`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;
}