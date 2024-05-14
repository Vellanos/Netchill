import React from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import Image from 'next/image';


interface Movie {
    id: string;
    title: string;
    poster_path: string;
}

interface MovieCarouselProps {
    moviesFetch: Movie[];
}

export default function CarouselMovies(props: MovieCarouselProps) {
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 5,
            numScroll: 2
        },
        {
            breakpoint: '1199px',
            numVisible: 4,
            numScroll: 2
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const moviesTemplate = (movie: Movie) => {
        return (
            <div className='carousel'>
                <div>
                    {movie.poster_path && (
                        <Image 
                            src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                            className='carousel-image'
                            alt={movie.title} 
                            width={250}
                            height={400}
                        />
                    )}
                </div>
                <div>
                    <h2 className='carousel-title'>{movie.title}</h2>
                </div>
            </div>
        );
    };
    
    return (
        <div>
            <Carousel 
                value={props.moviesFetch} 
                numScroll={1} 
                numVisible={3} 
                responsiveOptions={responsiveOptions} 
                itemTemplate={moviesTemplate} 
                autoplayInterval={10000}
                circular={false} // Supprime les boutons de défilement
            />
        </div>
    )
}
