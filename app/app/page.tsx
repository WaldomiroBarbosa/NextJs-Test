"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() 
{
  const [name, setName] = useState(" ")

  const { push }  = useRouter()

  const handleSubmit = (e: FormEvent) =>
  {
    e.preventDefault()

    push(`/pred/${name}`)
  }

  return (
    <div> 

      <div>
        <h1>Enter a name here.</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="search-box" 
            onChange= { (e) => 
                {setName(e.target.value)}} 
          />
          <button type="submit">Predict!</button>
        </form>
      </div>

    </div>
  )
}
