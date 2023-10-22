import getWikiResults from '@/lib/getWikiResults'
import Item from '../components/Item'

type Props = {
  params: {
    searchTerm: string
  }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} not found`,
    }
  }

  return {
    title: displayTerm,
    description: `Search Results for ${displayTerm}`,
  }
}

const SearchResultsPage = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData

  const results: Result[] | undefined = data?.query?.pages

  const displayTerm = searchTerm.replaceAll('%20', ' ')

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-slate-200 py-1">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />
        })
      ) : (
        <h2 className="p-2 text-xl">{`${displayTerm} not found`}</h2>
      )}
    </main>
  )
}

export default SearchResultsPage
