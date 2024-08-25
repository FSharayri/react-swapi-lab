const baseUrl = 'https://swapi.dev'




export  async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}


export  async function getStarshipDetails(starshipId) {
  const res = await fetch(`${baseUrl}/api/starships/${starshipId}`)
  return res.json()
}


export  async function getPilot(pilotId) {
  const res = await fetch(`${baseUrl}/api/people/${pilotId}`)
  return res.json()
}