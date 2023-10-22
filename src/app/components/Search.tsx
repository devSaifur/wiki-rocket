'use client'

import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'

type Props = {}

const Search = ({}: Props) => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setSearch('')
    router.push(`/${search}/`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-80 rounded-lg bg-white p-2 text-xl text-black focus:outline-slate-800"
      />

      <button className="ml-2 rounded-xl bg-slate-300 p-2 text-xl font-bold">
        🚀
      </button>
    </form>
  )
}

export default Search
