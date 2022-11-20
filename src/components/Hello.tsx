import { useEffect, useState } from "react"
import client from "../lib/api/client"

const Hello = () => {
  const [hello, setHello] = useState<string>('')

  useEffect(() => {
    const fetchHello = async () => {
      const hello = (await client.get<string>('/hello')).data
      setHello(hello)
    }
    fetchHello()
  }, [])

  return (
    <>
      <h1>Hello</h1>
      <p>{hello}</p>
    </>
  )
}

export default Hello
