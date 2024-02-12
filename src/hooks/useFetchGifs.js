import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/Getgifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoding, setisLoding] = useState(true);


    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setisLoding(false);
    }
    
    useEffect(() => {
        getImages();
    }, []);

console.log(images)
    return {
        images,
        isLoding,
    }
}

