const getWikiResults = async (searchTerm: string) => {
  const url = 'https://en.wikipedia.org/w/api.php?'
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
  })

  const res = await fetch(url + searchParams)

  if (!res.ok) return undefined

  return res.json()
}

export default getWikiResults
