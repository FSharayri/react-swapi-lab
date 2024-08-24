const baseUrl = 'https://swapi.dev'




export  async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}


export  async function getStarshipDetails(starshipId) {
  const res = await fetch(`${baseUrl}/api/starships/${starshipId}`)
  return res.json()
}