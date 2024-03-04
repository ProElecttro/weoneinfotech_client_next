import Navbar from "./components/navbar/navbar"

type Repository = {
  id: number,
  name: string,
  full_name: string,
}

export default async function page() {
  return (
    <div>
      <Navbar/>
    </div>
  )
}
