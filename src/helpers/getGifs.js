

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ay6SvrLuTyNAIxETGGjKoeCGDC10Ub22&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map(caro => ({
        id: caro.id,
        title: caro.title,
        url: caro.images.downsized_medium.url
    }));

    return gifs;
}

// const carros = [
//     {
//         id:123,
//         nombre: 'suzuki',
//     },
//     {
//         id:456,
//         nombre: 'toyota',
//     }
// ]

// const cars = carros.map(auto=>({
//     idNumber: auto.id
// }))
