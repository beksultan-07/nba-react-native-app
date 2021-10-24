export default function urlRequest(url){
  return fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      "x-rapidapi-key": "0c5f9ae241msh85a6dcdeb9f8669p13b255jsn87613b85d482"
    }
  })
  .then(response => {
    return response.json()
  })
}
