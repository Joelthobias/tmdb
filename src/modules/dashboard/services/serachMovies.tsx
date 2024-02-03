
interface SearchResult {
    id: number;
    title: string;
  }
  
  export const searchMovies = async (query: number): Promise<SearchResult[]> => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmM1ZGRhNTMwZWJiYWM1ZWQ4NmYxOThiMjVhOTJkYiIsInN1YiI6IjYyOGI5MWFhMGI3MzE2MDA2NjExNWRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JPwOZcvn_pjPalLjyprRI7D7n-hUXATYjHvrZvkH-LY',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      
      return data.results;
      
    } catch (error) {
      console.error('Error searching for movies:', error);
      throw error;
    }
  };
  