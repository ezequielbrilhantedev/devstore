'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function SearchForm() {
  const [dataInput, setDataInput] = useState('')
  const router = useRouter()

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!dataInput) {
      return null
    }

    router.push(`/search?q=${dataInput}`)
  }

  return (
    <form
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
      onSubmit={handleSearch}
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        onChange={(e) => {
          setDataInput(e.target.value)
        }}
        value={dataInput}
      />
    </form>
  )
}
