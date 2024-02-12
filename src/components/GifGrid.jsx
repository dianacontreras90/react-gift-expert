import { GifItem } from "./GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, islLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {
                islLoading && (<h2>cargando....</h2>)
            }

            <div className="card-grid" >
                {
                    images.map((image) => (

                        <GifItem 
                            key={image.id}
                            {...image}
                        />

                    ))
                }
            </div>
        </>
    )

}
