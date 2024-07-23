interface Results 
{
  age: number
  gender: string
  country: string
}

interface Params 
{
  params: {name: string}
}

const getInfo = async (name: string): Promise<Results> =>
{
  const ageResponse = await fetch(`https://api.agify.io/?name=${name}`)
  const ageData = await ageResponse.json()
  
  const genderResponse = await fetch(`https://api.genderize.io/?name=${name}`)
  const genderData = await genderResponse.json()
  
  const countryResponse = await fetch(`https://api.nationalize.io/?name=${name}`)
  const countryData = await countryResponse.json()
  
  const res: Results = 
  {
    age: ageData.age,
    gender: genderData.gender,
    country: countryData.country[0]?.country_id || 'Unknown'
  }
  
  return res
}

export default async function Page({ params }: Params) 
{
  const res = await getInfo(params.name)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, {params.name}!</h1>
      <div>
        <div>Age: {res.age}</div>
        <div>Gender: {res.gender}</div>
        <div>Country: {res.country}</div>
      </div>
    </main>
  )
}