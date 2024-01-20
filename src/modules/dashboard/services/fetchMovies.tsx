// import fetch from "node-fetch";
const fetchTrendingMovies = async () => {

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
try {
    console.log("Api callied to fetch");
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmM1ZGRhNTMwZWJiYWM1ZWQ4NmYxOThiMjVhOTJkYiIsInN1YiI6IjYyOGI5MWFhMGI3MzE2MDA2NjExNWRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JPwOZcvn_pjPalLjyprRI7D7n-hUXATYjHvrZvkH-LY'
      }
    };
    

    const response = await fetch(url, options);
    const data = await response.json();
    
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchTrendingMovies };
