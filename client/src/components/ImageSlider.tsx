import images from "./ico-components/images";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageSlider() {
    return (
        <>
            <div className="mt-8 pc:w-[1024px] pc:ml-[425px] laptop:ml-[120px] laptop:w-[1024px] bg-black shadow-xl">
                <Carousel autoPlay={ true } infiniteLoop={ true }  dynamicHeight={ false } showThumbs={ false } showStatus={ false }showArrows={ false }>
                    { images.map(image => 
                        <div key={ image.id }>
                            <img src={ image.src } alt={ image.alt } />
                        </div>
                    ) }
                </Carousel>
            </div>
        </>
    )
}