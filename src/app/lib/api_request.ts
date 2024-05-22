import { api_key } from './api_key'

export const getPopularMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options);
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Error fetching popular movies: ' + error.message);
  }
}

export const getRatedMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options);
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Error fetching rated movies: ' + error.message);
  }
}

export const getUpcomingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1', options);
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Error fetching upcoming movies: ' + error.message);
  }

}

export const getSpecificPopularMovies = async (pageNumber:number) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=${pageNumber}`, options);
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Error fetching popular movies: ' + error.message);
  }
}

export const getSpecificRatedMovies = async (pageNumber:number) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=${pageNumber}`, options);
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Error fetching rated movies: ' + error.message);
  }
}

export const getSpecificUpcomingMovies = async (pageNumber:number) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=${pageNumber}`, options);
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Error fetching rated movies: ' + error.message);
  }
}

export const getDetailsMovie = async (id: string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, options);
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Error fetching movie details: ' + error.message);
  }
};

export const searchMovies = async (find: string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${find}&include_adult=false&language=fr-FR&page=1`, options);
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Error searching movies: ' + error.message);
  }
};
