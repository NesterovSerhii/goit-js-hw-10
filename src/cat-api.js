const API_KEY = 'live_VzYCiNQhENDXs4zzlhvcUXJeYQqz1qj9Ynp4fBM9S0Z0JfqjQazPJGQZF9ZEljni'; 

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`;
  return fetch(url).then((res) => res.json());
}

function fetchCatByBreed(breedId){
  const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
  return fetch(url).then((res) => res.json());
}
export { fetchBreeds, fetchCatByBreed };